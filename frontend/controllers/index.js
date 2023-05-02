const route1 = (req, res) => {
    req = require("../user.json");
    res.json(req["data"]);
};

const route2 = (req, res) => {
    res.send("Godspower Ogbaudu")
}

module.exports = {route1, route2};
