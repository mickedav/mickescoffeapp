
function on(){
  console.log("on")

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.thingspeak.com/update?api_key=FQR9UWM8SGJQYXSY&field1=1", false);
  xhr.send();

  console.log(xhr.status);
  console.log(xhr.statusText);
}
function off(){
  console.log("off")

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.thingspeak.com/update?api_key=FQR9UWM8SGJQYXSY&field1=0", false);
  xhr.send();

  console.log(xhr.status);
  console.log(xhr.statusText);
}
/*
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
*/
