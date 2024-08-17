import axios from "axios";
//import { API_URL } from "../config";

const instance = axios.create({
    baseURL: "https://sinfronteras-api.onrender.com",
    withCredentials: true,
});

export default instance;
