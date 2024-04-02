import axios from "axios";
import {API_URL_TEST} from "../config/config";

export function addAds(data = {}) {
    return axios.post(API_URL_TEST+'ads', data)
}


export async function deleteAd(id: number) {
    try {
        await axios.delete(`${API_URL_TEST}ads/${id}`);
    } catch (error) {
        console.error("Error deleting ad:", error);
        throw error;
    }
}