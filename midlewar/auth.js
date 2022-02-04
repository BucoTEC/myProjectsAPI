const authenticated = (req, res, next) => {
  const { tajna } = req.query;
  if (tajna === "hahaha") {
    next();
  } else {
    res.send("You are not allowed to do that");
  }
};

export default authenticated;
