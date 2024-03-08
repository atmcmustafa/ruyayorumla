import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RuyaYorumla from "./pages/RuyaYorumla.jsx";
import TextToImage from "./pages/TextToImage.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Sozlesme from "./pages/Sozlesme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<RuyaYorumla />} path="/ruyayorumla" />
      <Route element={<TextToImage />} path="/generateImage" />
      <Route element={<Contact />} path="/iletisim" />
      <Route element={<Sozlesme />} path="/sozlesme" />
      <Route element={<Error />} path="*" />
    </Routes>
    <Footer />
  </BrowserRouter>
);
