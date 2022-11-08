import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import useApi from "./components/Hooks/useApi";

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
        </Routes>
      </HashRouter>
      <Footer />,
    </div>
  );
}

export default App;
