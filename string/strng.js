



var feedback = "   I loved the FOOD and the service!   ";
console.log(feedback);
document.getElementById("demo1").innerHTML = feedback;

var cleanedFeedback = feedback.trim();
console.log(cleanedFeedback);
document.getElementById("demo2").innerHTML = cleanedFeedback;

cleanedFeedback = cleanedFeedback.toLowerCase();
console.log(cleanedFeedback);
document.getElementById("demo3").innerHTML = cleanedFeedback;

cleanedFeedback = cleanedFeedback.replace("food", "ambience");
console.log(cleanedFeedback);
document.getElementById("demo4").innerHTML = cleanedFeedback;


var servicePosition = cleanedFeedback.indexOf("service");
console.log("Position of 'service':", servicePosition);
document.getElementById("demo5").innerHTML = "Position of 'service': " + servicePosition;


var wordsArray = cleanedFeedback.split(" ");
console.log(wordsArray);
document.getElementById("demo6").innerHTML = wordsArray;


