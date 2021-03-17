import handleError from "./helpers/handleError";
import axios from "./helpers/axios.token";

function getBalanceService() {
  return axios
    .get("/balance")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

export { getBalanceService };
