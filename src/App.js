import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CategoryDetail from "./pages/category_details/category_detail.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import useApi from "./components/Hooks/useApi";
import {
  REMOVE_APP_DATA,
  SET_APP_DATA,
} from "./store/reducers/appDataReducer/appDataReducer";
import { REMOVE_TOKEN } from "./store/reducers/authReducer/authReducer";
import { AbilityContext } from "./ability/can";
import ability from "./ability/ability";
import Dashboard from "./pages/admin/dashboard/dashboard";

// let userLastActive =date()

// function isUserActive() {
//   setTimeout(() => {
//     if(){}
//     alert('User not active')
//   }, 3e3); //=3000
// }

function App(props) {
  //TODO burada appData bilgisini al

  console.log(">> APP COMPONENT PROPS", props);

  const api = useApi();

  console.log('>> APP DATA STATUS', props.appDataState.appData)

  // TODO Bu değeri doldur
  const clientAbility = props.appDataState.appData
    ? ability(props.appDataState.appData.user)
    : ability(null);

  //token var, appData yok ise appData bilgisini apiden al
  if (props.authState.token && !props.appDataState.appData) {
    api
      .get("user/appData")
      .then((response) => {
        console.log(">>App Data Resp", response);

        const action = {
          type: SET_APP_DATA,
          payload: {
            appData: response.data.data,
          },
        };
        props.dispatch(action);
      })
      .catch((err) => {
        console.error(">>APP API ERROR", err);
        if (err.response.data.status === "error") {
          if (err.response.data.exceptionType === "UserNotLoggedInException") {
            // bu hatayı aldığımıza göre bizdeki token bilgisi artık invalid

            //Local storage'dan token bilgisini sil

            localStorage.removeItem("token");

            const action = {
              type: REMOVE_TOKEN,
            };
            props.dispatch(action);

            const actionAppData = {
              type: REMOVE_APP_DATA,
            };
            props.dispatch(actionAppData);

            window.location.href = "/#";
          }
        } else {
          //Genel hata mesajı ver
          alert("Genel bir hata oluştu, lütfen daha sonra tekrar deneyiniz.");
        }
      });
  }

  return (
    <AbilityContext.Provider value={clientAbility}>
      <div className="container py-3">
        <Header />
        <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="category/:slug" element={<CategoryDetail />} />

            <Route path="admin" element={<Dashboard/>}>
                
                 <Route path="dashboard" element={<Dashboard />}>
                  
            </Route>
          </Routes>
        </HashRouter>
        <Footer />
      </div>
    </AbilityContext.Provider>
  );
}

const mapProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapProps)(App);
