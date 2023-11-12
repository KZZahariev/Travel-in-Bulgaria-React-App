import Footer from "./components/core/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./components/core/Header";
import Home from "./components/Home";
import About from "./components/About";

import "./App.css";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import NewAnnouncement from "./components/announcements/new-announcement";
import AnnouncementsList from "./components/announcements/announcements-list";

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
            <Route path="/users/profile" element={<Profile />}/>
            <Route path="/announcements" element={<AnnouncementsList />}/>
            <Route path="/add-announcement" element={<NewAnnouncement />}/>
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
