import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CategoryDetail from "./pages/category_details/category_detail.js"
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import useApi from "./components/Hooks/useApi";
import ServiceBox from "./pages/category_details/components/service_box";

function App() {
  return (
    <div className="container py-3">
      <Header />
      <Home />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="#/category/:slug" element={<CategoryDetail />} />
          <Route path="#/service/:slug" element={<ServiceBox/>} />

        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
