import axios from "axios";
import authHeader from "./auth-header";
import {API_URL_TEST} from "../config/config";

export const getPublicContent = () => {
  return axios.get(API_URL_TEST + "all");
};

export const getNews = () => {
  return axios.get(API_URL_TEST + "news");
};

export const getAds = () => {
  return axios.get(API_URL_TEST + "ads");
};

export const getUserBoard = () => {
  return axios.get(API_URL_TEST + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL_TEST + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL_TEST + "admin", { headers: authHeader() });
};
