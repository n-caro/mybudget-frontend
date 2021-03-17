import axios from "./helpers/axios.token";
import handleError from "./helpers/handleError";

function getOperations({ limit, page }) {
  return axios
    .get("/operations", {
      params: {
        limit,
        page,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function createOperation({ amount, categoryId, dateOperation, note, typeId }) {
  return axios
    .post("/operations", { amount, categoryId, dateOperation, note, typeId })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function updateOperation(id, { amount, categoryId, dateOperation, note }) {
  return axios
    .patch(`/operations/${id}`, { amount, categoryId, dateOperation, note })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function deleteOperation(id) {
  return axios
    .delete(`/operations/${id}`, {})
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

export { getOperations, createOperation, updateOperation, deleteOperation };
