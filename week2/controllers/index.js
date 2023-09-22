
// const getData = async (req, res, next) => {
//   const result = await require("../user.json")
//   let result2 = []
//   const run = (lists) => {
//     for(var i in result){
//       lists.push([i, result[i] ])
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists[0])
//     }}
//     run(result2)
// };

// const getData = async (req, res, next) => {
//   const result = await require("../user.json");
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]); // we just need the first one (the only one)
//   });
// };
const getData = async (req, res, next) => {
  const result = await require("../user.json")
  res.setHeader('Content-Type', 'application/json');
  const user = result[0]
  res.status(200).json(user)
};

module.exports = { getData };