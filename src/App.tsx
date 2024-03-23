import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import * as AuthService from "./services/auth.service";
import IUser from "./types/user.type";

import Login from "./components/Login";
import Register from "./components/Register";
import News from "./components/News/News";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import EventBus from "./common/EventBus";
import AddNews from "./components/News/AddNews";
import AddAds from "./components/Ads/AddAds";
import AdsPage from "./components/Ads/AdsPage";
import { AboutPage } from "./components/About/About";
import { urls } from "./config/config";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Accel from "./views/accelerator";

const App: React.FC = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className="max-w-full">
      <Header currentUser={currentUser} logOut={logOut} />
      <div>
        <Routes>
          <Route path={urls.main} element={<AboutPage />} />
          <Route path={urls.news} element={<News />} />
          <Route path={urls.about} element={<AboutPage />} />
          <Route path={urls.ads} element={<AdsPage />} />
          <Route path={urls.login} element={<Login />} />
          <Route path={urls.register} element={<Register />} />
          <Route path={urls.profile} element={<Profile />} />
          <Route path={urls.user} element={<BoardUser />} />
          <Route path={urls.mod} element={<BoardModerator />} />
          <Route path={urls.admin} element={<BoardAdmin />} />
          <Route path={urls.addNews} element={<AddNews />} />
          <Route path={urls.addAds} element={<AddAds />} />
          <Route path={urls.accel} element={<Accel />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
