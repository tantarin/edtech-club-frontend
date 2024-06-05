import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import News from "./components/News/News";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import AddNews from "./components/News/AddNews";
import AddAds from "./components/Ads/AddAds";
import { AboutPage } from "./components/About/About";
import { urls } from "./config/config";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Accel from "./views/accelerator";
import Digest from "./views/digest";
import Wiki from "./views/wiki";
import Startups from "./views/startups";
import Ads from "./views/ads";
import Art from "./views/article";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col max-w-full h-full">
      <Header />
      <div className="overflow-auto h-full">
        <Routes>
          <Route path={urls.main} element={<AboutPage />} />
          <Route path={urls.news} element={<News />} />
          <Route path={urls.about} element={<AboutPage />} />
          <Route path={urls.ads} element={<Ads />} />
          <Route path={urls.login} element={<Login />} />
          <Route path={urls.register} element={<Register />} />
          <Route path={urls.profile} element={<Profile />} />
          <Route path={urls.user} element={<BoardUser />} />
          <Route path={urls.mod} element={<BoardModerator />} />
          <Route path={urls.admin} element={<BoardAdmin />} />
          <Route path={urls.addNews} element={<AddNews />} />
          <Route path={urls.addAds} element={<AddAds />} />
          <Route path={urls.accel} element={<Accel />} />
          <Route path={urls.digest} element={<Digest />} />
          <Route path={urls.wiki + '/*'} element={<Wiki />} />
          <Route path={urls.startups} element={<Startups />} />
          <Route path={urls.arts} element={<Art />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
