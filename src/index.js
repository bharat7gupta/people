var people = require("./people.json");
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: people,
    random: uniqueRandomArray(people)
}