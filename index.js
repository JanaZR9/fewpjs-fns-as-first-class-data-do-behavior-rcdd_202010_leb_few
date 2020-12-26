/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementationof greet() */
//let hours= ' '+ ':'+ ' ';
//let nb = Number(hours);
const greets = ["Good Morning","Good Afternoon","Good Evening"];
function greet(hours){
  let hour = parseInt(hours,10)
  if(hours < 12){
  return greets[0];}
  else 
  if(hours >= 12 && hours<=17){
  return greets[1];}
  else {
  return greets[2];}
}
/* Write your implementation of displayMessage() */

 function displayMessage(message){
   document.getElementById('greeting').innerText =message;
   
   
 }