const getData = async (req, res, next) => {
  const result = await require("../user.json")
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader('Content-Type', 'application/json');
  const user = result[0]
  res.status(200).json(user)
};


module.exports = { getData };