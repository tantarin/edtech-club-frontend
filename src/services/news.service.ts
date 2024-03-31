import axios from "axios";
import {API_URL_TEST} from "../config/config";

export function addNews(data = {}) {
    return axios.post(API_URL_TEST+'news', data)
}

export function upload(file: File, id: bigint, onUploadProgress: (progressEvent: ProgressEvent<EventTarget>) => void) {
    let formData = new FormData();
    formData.append("file", file);

    return axios.post(API_URL_TEST + "news/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
}
