import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Content-Type": "application/json",
    },
});


export const signup = (data) => {
    return instance.post("api/auth/register/", data);
};

export const login = (data) => {
    return instance.post("api/auth/login/", data);
};

export const logout = () => {
    return instance.post("api/auth/logout/");
}

export const scrapeArticle = (url) => {
    return instance.get(`ai/scrape/?url=${url}`);
}

export const getTranscript = (url) => {
    return instance.get(`ai/get-video-summary/?url=${url}`);
}