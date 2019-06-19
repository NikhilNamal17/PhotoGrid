import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 60a1c1f05b91d207391b11c784c71e29bd8636784eaf8f8656ae08d6a34943bb"
    }
});
