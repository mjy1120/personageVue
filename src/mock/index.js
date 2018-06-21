var Mock = require("mockjs");
let data = [];
for (let i = 1; i < 4; i++) {
    data.push(Mock.mock({
        name: "@name",
        city: "@city",
        cont: 0,
        price: 15,
        img: "../../static/img/" + i + ".jpg",
        checked: false
    }))
}

module.exports = data;