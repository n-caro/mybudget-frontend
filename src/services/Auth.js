const axios = require("axios");

function signInService({ email, password }) {
  return axios
    .post(`${process.env.REACT_APP_APIURL}/auth/signin`, {
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      let message = "Servicio actualmente no disponible.";
      if (error.response) {
        message = error.response.data.message;
      }
      return {
        error: {
          message,
        },
      };
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
      return res;
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      let message = "Servicio actualmente no disponible.";
      if (error.response) {
        message = error.response.data.message;
      }
      return {
        error: {
          message,
        },
      };
    });
}

export { signInService, signUpService };
