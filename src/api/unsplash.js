import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 83173d4e5a67a507d61ba1679c8320b04187737bf7a46b9e275125327036c591"
    }
});
