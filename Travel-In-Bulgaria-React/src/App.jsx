import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import "./App.css";

import Footer from "./components/core/Footer";
import Header from "./components/core/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile/Profile";
import EditProfile from "./components/user/Profile/ProfileModes/EditProfile";
import NewAnnouncement from "./components/announcements/new-announcement";
import AnnouncementsList from "./components/announcements/announcements-list";
import PageNotFound from "./components/page-not-found/Page-not-found";
import EditModeCurrentAnn from "./components/announcements/current-announcement/EditModeCurrentAnnouncement";
import Logout from "./components/user/Logout";
import CurrentAnnouncement from "./components/announcements/current-announcement";
import ErrorBoundary from "./guards/ErrorBoundary/ErrorBoundary";
import AuthGuard from "./guards/AuthGuards";
import BaseLoggedAuthGuard from "./guards/BaseLoggedInAuthGuard";

function App() {
  return (
    // <ErrorBoundary>
        <AuthProvider>
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route element={<BaseLoggedAuthGuard />}>
                        <Route path="/auth/login" element={<Login />}/>
                        <Route path="/auth/register" element={<Register />}/>
                    </Route>
                    <Route path="/announcements" element={<AnnouncementsList />}/>
                    <Route path="/announcements/:announcementId" element={<CurrentAnnouncement />}/>
                    <Route element={<AuthGuard />}>
                        <Route path="/logout" element={<Logout />}/>
                        <Route path="/add-announcement" element={<NewAnnouncement />}/>
                        <Route path="/announcements/edit/:announcementId" element={<EditModeCurrentAnn />}/>
                        <Route path="/users/profile" element={<Profile />}/>
                        <Route path="/users/profile/edit" element={<EditProfile />}/>
                    </Route>

                    <Route path="*" element={<PageNotFound />}/>
                </Routes>

                <Footer />
            </div>
        </ AuthProvider>
    // </ErrorBoundary>
  )
}

export default App;
