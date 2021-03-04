const axios = require("axios");

function getOperations({ token, limit, page }) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/operations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        page
      }
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
      let message = "Service currently unavailable.";
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
      }
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
      let message = "Service currently unavailable..";
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

function updateOperation(token, id, {amount, categoryId, dateOperation, note}) {
  return axios
    .patch(`${process.env.REACT_APP_APIURL}/operations/${id}`, {amount, categoryId, dateOperation, note }, {
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
      let message = "Service currently unavailable.";
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

export { getOperations, createOperation, updateOperation };
