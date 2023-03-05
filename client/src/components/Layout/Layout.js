import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../../sections/Home/Home";
import { Login } from "../../sections/Login/Login";
import { Register } from "../../sections/Register/Register";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
