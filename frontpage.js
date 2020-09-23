var i;
cars=["bwm", "toyota", "tesla"]
var text;

for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
    console.log(text);
}

if (i>100){
    console.log("i is greater than 100")
}
else{
    console.log("I is less than 100")
}

function myFunction() {
  return alert("Button clicked");
}