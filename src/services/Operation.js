const axios = require("axios");

function getOperations({ token }) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/operations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .then((res) => {
      console.log("RES:", res);
      return res.data;
    })
    .catch((error) => {
      console.log("ERROR:", error.response);
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


function createOperation(token, {amount, categoryId, dateOperation, note, typeId}) {
  return axios
    .post(`${process.env.REACT_APP_APIURL}/operations`, {amount, categoryId, dateOperation, note, typeId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res;
    })
    .then((res) => {
      console.log("RES:", res);
      return res.data;
    })
    .catch((error) => {
      console.log("ERROR:", error.response);
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

export { getOperations, createOperation };
