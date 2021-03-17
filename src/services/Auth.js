import handleError from "./helpers/handleError";
import axios from "axios";

function signInService({ email, password }) {
  return axios
    .post(`${process.env.REACT_APP_APIURL}/auth/signin`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function signUpService({ name, email, password }) {
  return axios
    .post(`${process.env.REACT_APP_APIURL}/auth/signup`, {
      name,
      email,
      password,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

export { signInService, signUpService };
