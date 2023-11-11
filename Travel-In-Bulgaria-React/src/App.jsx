import Footer from "./components/core/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/core/Header";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";
import Login from "./components/user/Login";
import Register from "./components/user/Register";

function App() {
  return (
    <div className="main-container">
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            {/* <Route path="/announcements" element={<Announcements />}/> */}
            {/* <Route path="/about" element={<NewAnnouncement />}/> */}
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
