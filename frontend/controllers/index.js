const route1 = (req, res) => {
    res.json("Francisca Ogbaudu");
};

const route2 = (req, res) => {
    res.send("Godspower Ogbaudu")
}

module.exports = {route1, route2};
