"use strict";

var getFirstName = function getFirstName(name) {
    var array = name.split(" ");
    return array[0];
};

var getFirstNameConcise = function getFirstNameConcise(name) {
    return name.split(" ")[0];
};

var result = getFirstNameConcise("Lee Harvey");
// const result = getFirstName("John Smith");
console.log(result);
