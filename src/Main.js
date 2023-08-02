import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import App from "./pages/App";
import Login from "./pages/Login";
import RatingForm from "./components/RatingForm";
import { AuthProvider } from "./contexts/AuthContext";


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
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default Main;
