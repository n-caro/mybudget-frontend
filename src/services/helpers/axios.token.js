import axios from "axios";
const LOGIN_URL = "/signin";

const instance = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
});

//Config Auth
const session = JSON.parse(window.localStorage.getItem("session"));
if (session) {
  const { token } = session;
  instance.defaults.headers.common["Authorization"] = "Bearer " + token;
}

// Config interceptors
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.error("Session: invalid token.");
      window.localStorage.removeItem("session");
      window.location.href = LOGIN_URL;
    }
    return Promise.reject(error);
  }
);
export default instance;
