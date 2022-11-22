
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CategoryDetail from "./pages/category_details/category_detail.js"
import { HashRouter, Routes, Route } from "react-router-dom";


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

        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
