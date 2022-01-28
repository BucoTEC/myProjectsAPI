const authenticated = (req, res, next) => {
  const { tajna } = req.query;
  if (tajna === "04012000") {
    next();
  } else {
    res.send("You are not allowed to do that");
  }
};

export default authenticated;
