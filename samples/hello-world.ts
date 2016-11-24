import {buildPersonData, DEMO} from "./buildPersonData";

const partialAddr = ['street name', 'street num', 'po box'];

const fname = 'kobe',
    lname = 'bryant';

const personData = {
    fname,
    lname,
    addr: partialAddr
};

console.log(buildPersonData(personData));
