import handleError from "./helpers/handleError";
import axios from "axios";

function getBalanceService({ token }) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/balance`, {
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

export { getBalanceService };
