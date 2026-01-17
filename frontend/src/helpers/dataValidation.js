


export const validateSignupData = (data) => {
    const errors = [];
    if (!data.username) {
    errors.push("Username is required");
    }
    if (!data.email) {
    errors.push("Email is required");
    }
    if (!data.password1) {
    errors.push("Password is required");
    }
    if (!data.password2) {
    errors.push("Confirm Password is required");
    }
    return errors.length ? errors : true
}

export const validateLoginData = (data) => {
    const errors = [];
    if (!data.username) {
    errors.push("Username is required");
    }
    if (!data.password) {
    errors.push("Password is required");
    }
    return errors.length ? errors : true
}

export const urlValidation = (url) => {
    const urlRegex = /^(https?:\/\/)?([\w.-]+)\.[a-z]{2,}(:\d+)?(\/[^\s]*)?$/;
    return urlRegex.test(url);
}

export const youtubeUrlValidation = (url) => {
    const urlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([^&=%\?]{11})/;
    return urlRegex.test(url);
}