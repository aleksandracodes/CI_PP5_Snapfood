import axios from "axios";

// the unique URL for the deployed API project on Render
axios.defaults.baseURL = "https://snapfood-drf-api.onrender.com/";
// expected data format by API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// avoid any CORS errors when sending cookies
axios.defaults.withCredentials = true;

// Refreshing access tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();