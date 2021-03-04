const axios = require("axios");

function getBalanceService({token}) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/balance`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      return res;
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("ERROR:", error.response)
      let message = "Servicio actualmente no disponible.";
      if (error.response) {
        message = error.response.data.message;
      }
      return {
        error: {
          message
        },
      };
    });
}

export { getBalanceService };
