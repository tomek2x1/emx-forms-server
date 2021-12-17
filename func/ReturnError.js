module.exports = (res, e) => {
  let message = `Error: ${e.message}`;
  let status = e.status || 400;

  return res.status(status).json({ status, message });
};
