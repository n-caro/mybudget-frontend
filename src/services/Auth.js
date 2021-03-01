const axios = require("axios");
const ENDPOINT = "http://localhost:4000/api/auth/signin";

function signInService({ email, password }) {
  return axios
    .post(ENDPOINT, {
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

export { signInService };
