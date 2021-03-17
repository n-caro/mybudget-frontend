import handleError from "./helpers/handleError";
import axios from "./helpers/axios.token";

function getCategories() {
  return axios
    .get("/categories")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

export { getCategories };
