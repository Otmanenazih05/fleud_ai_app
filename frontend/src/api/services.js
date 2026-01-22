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

export const createSummary = (data) => {
    return instance.post("api/summary/create/", data);
}

export const getSummaries = () => {
    return instance.get("api/summary/list/")
}

export const getSummary = (id) => {
    return instance.get(`api/summary/retrieve/${id}/`)
}

export const deleteSummary = (id) => {
    return instance.delete(`api/summary/destroy/${id}/`)
}
