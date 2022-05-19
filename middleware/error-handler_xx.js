const errorHandlerMiddleware_xx = (err, req, res, next) => {
  console.log('error', err);
  res.status(500).json({ msg: err });
};

export default errorHandlerMiddleware_xx;
