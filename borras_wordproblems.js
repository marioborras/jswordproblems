//1
function reverseAString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseAString('nycda');

//2
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

//3 had to look up what a regex was
function translatePigLatin(str) {
    var firstVowel = str.match(/[aeiou]/);
    var firstPosition = str.indexOf(firstVowel);

    if (firstPosition > 0 ){
        return str.slice(firstPosition) + str.slice (0, firstPosition) + "ay";
    }
    return str + "way";
    }

translatePigLatin("banana");

