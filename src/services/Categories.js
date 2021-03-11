import handleError from "./helpers/handleError";
import axios from "axios";

function getCategories({ token }) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

export { getCategories };
