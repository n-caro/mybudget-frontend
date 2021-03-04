const axios = require("axios");

function getCategories({token}) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/categories`, {
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
      let message = "Service currently unavailable.";
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

export { getCategories };