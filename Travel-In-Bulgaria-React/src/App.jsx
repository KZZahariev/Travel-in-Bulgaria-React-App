import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import "./App.css";

import Footer from "./components/core/Footer";
import Header from "./components/core/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import NewAnnouncement from "./components/announcements/new-announcement";
import AnnouncementsList from "./components/announcements/announcements-list";
import PageNotFound from "./components/page-not-found/Page-not-found";
import CurrentAnnouncement from "./components/announcements/current-announcement";
import EditModeCurrentAnn from "./components/announcements/current-announcement/EditModeCurrentAnnouncement";

function App() {
  return (
    <AuthProvider>
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
              <Route path="/announcements/:announcementId" element={<CurrentAnnouncement />}/>
              <Route path="/add-announcement" element={<NewAnnouncement />}/>
              <Route path="/edit/:announcementId" element={<EditModeCurrentAnn />}/>
              <Route path="*" element={<PageNotFound />}/>
          </Routes>

          <Footer />
      </div>
    </ AuthProvider>
  )
}

export default App;
