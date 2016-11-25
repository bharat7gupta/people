var expect = require("chai").expect;
var people = require("./index");

describe("people", function() {
    describe("all", function(){
        it("should be an array of objects", function(){
            expect(people.all).to.satisfy(isArrayOfObjects);

            function isArrayOfObjects(array) {
                return array.every(function(item){
                    return typeof item === "object";
                });
            }
        });

        it("should contain 'Bharat Gupta'", function() {
            expect(people.all.filter(function(item){
                return item.name === "Bharat Gupta";
            }).length === 1).to.be.true;
        });
    });

    describe("random", function() {
        it("should return a random person", function(){
            var person = people.random();
            expect(people.all.filter(function(item){
                return item.id === person.id;
            }).length === 1).to.be.true;
        });
    });
});