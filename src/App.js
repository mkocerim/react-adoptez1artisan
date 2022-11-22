
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
<<<<<<< HEAD
import CategoryDetail from "./pages/category_details/category_detail.js"
import { HashRouter, Routes, Route } from "react-router-dom";

=======
import CategoryDetail from "./pages/category_details/category_detail.js";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import useApi from "./components/Hooks/useApi";
import ServiceBox from "./pages/category_details/components/service_box";
import {REMOVE_APP_DATA, SET_APP_DATA} from '.store/reducers/appDataReducer'
import {REMOVE_TOKEN} from './store/reducers/authReducer'
>>>>>>> 47a76784b22b9c639db433520ec3f5a8b267b771

function App() {
  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="#/category/:slug" element={<CategoryDetail />} />
<<<<<<< HEAD

=======
          <Route path="#/service/:slug" element={<ServiceBox />} />
>>>>>>> 47a76784b22b9c639db433520ec3f5a8b267b771
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
