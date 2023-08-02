import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./pages/App";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";
import RateUs from "./pages/RateUs";

function Main() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app" element={<App />} />
            <Route path="/rate-us" element={<RateUs />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default Main;
