import axios from "axios";
import {API_URL_TEST} from "../config/config";

export function addAds(data = {}) {
    return axios.post(API_URL_TEST+'ads', data)
}
