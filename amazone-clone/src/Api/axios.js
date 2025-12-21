import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-268ad/us-central1/api",
  baseURL: "https://amazon-api-deploy-y34p.onrender.com/",
});
export {axiosInstance}