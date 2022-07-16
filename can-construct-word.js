'use strict';
// add whatever parameters you deem necessary & write docstring

/* 
simple solution
create two maps, map1 for word, map2 for letters.
compare the maps.

? how do we compare the maps
- by iterating across one, and comparing to the other.

map is O(1)


*/



function canConstructWord(word,letter) {

    if (word.length > letter.length){
        return false;
    }

    function _getFrequencyCounter(items) {
        let freqs = new Map();

        for (let item of items) {
            let curr = freqs.get(item) || 0; 
// we know this is different than we would build this, we know what ti does, but aern't sure why
            freqs.set(item, curr + 1);
        }
        return freqs;
    }

    const wordFreq = _getFrequencyCounter(word);
    const letterFreq = _getFrequencyCounter(letter);

   // console.log(wordFreq.get('a'), letterFreq.get('a'));
   // console.log(wordFreq,letterFreq);
//debugger
    for (let char of wordFreq.keys()){
       // console.log('in the loop', wordFreq.get('a'), letterFreq.get('a'))
        if (wordFreq.get(char) > letterFreq.get(char)){
            return false;
        }
    }
    return true;
}

