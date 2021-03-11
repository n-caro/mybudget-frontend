import handleError from "./helpers/handleError";
import axios from "axios";

function getOperations({ token, limit, page }) {
  return axios
    .get(`${process.env.REACT_APP_APIURL}/operations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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

function createOperation(
  token,
  { amount, categoryId, dateOperation, note, typeId }
) {
  return axios
    .post(
      `${process.env.REACT_APP_APIURL}/operations`,
      { amount, categoryId, dateOperation, note, typeId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function updateOperation(
  token,
  id,
  { amount, categoryId, dateOperation, note }
) {
  return axios
    .patch(
      `${process.env.REACT_APP_APIURL}/operations/${id}`,
      { amount, categoryId, dateOperation, note },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return handleError(error);
    });
}

function deleteOperation(token, id) {
  return axios
    .delete(`${process.env.REACT_APP_APIURL}/operations/${id}`, {
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

export { getOperations, createOperation, updateOperation, deleteOperation };
