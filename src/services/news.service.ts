import axios from "axios";
//TODO refactor
const API_URL = "http://localhost:8080/api/test/";

export function addNews(data = {}) {
    return axios.post(API_URL+'news', data)
}
