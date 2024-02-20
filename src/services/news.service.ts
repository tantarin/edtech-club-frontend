import axios from "axios";
import {API_URL_TEST} from "../config/config";

export function addNews(data = {}) {
    return axios.post(API_URL_TEST+'news', data)
}
