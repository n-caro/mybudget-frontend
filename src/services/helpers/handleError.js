export default function handleError(error) {
  let statusCode = 503;
  let message = "Service currently unavailable";
  if (error.response) {
    statusCode = error.response.status;
    message = error.response.data.message || message;
  }
  console.error("ERROR:", error.message);
  return {
    error: {
      message,
      statusCode,
    },
  };
}
