'use strict';
 
 /*
 conditions:
 - not enough values  keys should have value of null
 - not enough keys, don't worry about it

 return:
 object with key / value pairs.

 will need th iterator variable of a standard for loop to 
 handle referencing the other arrya without actually interacting with it.

 check if there's a value and if not set it to null

 */


function twoArrayObject(arrKeys,arrVals) {

    let obj = {};

    for (let i = 0; i < arrKeys.length; i++){
       // (arrVals[i]) ? obj[arrKeys[i]] = arrVals[i] :  obj[arrKeys[i]] = null;
        obj[arrKeys[i]] = arrVals[i] ? arrVals[i] : null;
    }

    return obj;
}
