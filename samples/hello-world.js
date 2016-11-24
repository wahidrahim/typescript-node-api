"use strict";
var buildPersonData_1 = require("./buildPersonData");
var partialAddr = ['street name', 'street num', 'po box'];
var fname = 'kobe', lname = 'bryant';
var personData = {
    fname: fname,
    lname: lname,
    addr: partialAddr
};
console.log(buildPersonData_1.buildPersonData(personData));
