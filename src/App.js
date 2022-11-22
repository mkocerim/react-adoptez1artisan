
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CategoryDetail from "./pages/category_details/category_detail.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import useApi from "./components/Hooks/useApi";



function App(props) {

  //TODO burada appData bilgisini al

  console.log('>> APP COMPONENT PROPS',props)

  const api=useApi()

  if(props.authState.token && (!props.appDataState.appData)){
    
    // Burada appData bilgisini alabiliriz
  api.get('user/appData')
    .then((response)=>{console.log(response)})
    .catch(err=>{console.log('ERROR',err)})
  



  }
  
  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="#/category/:slug" element={<CategoryDetail />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

const mapProps=(state)=>{
  return{
    ...state,
  }
}
export default connect(mapProps)(App);
