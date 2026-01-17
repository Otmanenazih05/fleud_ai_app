import axios from "axios";

export async function generateCoverImg(promptText) {
    try {
        // Proxy the request through our backend to avoid CORS and hide the token
        const response = await axios.post(
            "http://localhost:8000/ai/generate-image/",
            { inputs: promptText },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.data.image_b64) {
            return {
                status: 200,
                data: `data:image/png;base64,${response.data.image_b64}`
            };
        }

    } catch (error) {
        console.error("Backend Generation Error:", error);
        return {
            status: error.response?.status || 500,
            data: error.response?.data?.error || error.message || "Unknown error occurred"
        };
    }
}
