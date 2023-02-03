//step1: USing the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//step2: Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result1 = waldoRegex.test(waldoIsHiding);

//step3: Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);

//step4: Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result3 = fccRegex.test(myString);

//step5: Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);

//step6: Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig;
let result5 = twinkleStar.match(starRegex);

//step7: Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);

//step8: Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex);

//step9: Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig;
let result8 = quoteSample1.match(alphabetRegex); 

//step10: Numbers and Letters
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result9 = quoteSample2.match(myRegex1);

//step11: Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-9]/gi;
let result10 = quoteSample3.match(myRegex);

//step12: Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/gi;
let result11 = difficultSpelling.match(myRegex);

//step13: Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result12 = chewieQuote.match(chewieRegex);

//step14: Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
let result13 = text.match(myRegex);

//step15: Find One or More Criminals in a Hunt
let reCriminals = /C+/gi;

//step16: Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result14 = calRegex.test(rickyAndCal);

//step17: Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result15 = lastRegex.test(caboose);

//step18: All Letters and Numbers
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result16 = quoteSample.match(alphabetRegexV2).length;

//step19: Everything But Letters and Numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result17 = quoteSample.match(nonAlphabetRegex).length;

//step20: All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result18 = movieName.match(numRegex).length;

//step21: Non Numbers
let movieName0 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result19 = movieName.match(noNumRegex).length;

//step22: Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result20 = userCheck.test(username)