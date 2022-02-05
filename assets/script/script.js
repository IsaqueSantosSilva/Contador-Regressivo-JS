let currentYear = new Date().getFullYear();
// Lets add another year to the current year so it will always be ahead
currentYear++;
// Let's convert to string so we can use it more easily as an object
yearString = String(currentYear);
const countDate = new Date("Janurary" + yearString);

const countdown = setInterval(function () {
   var now = new Date().getTime();
  var gap = countDate - now;

  // A little math so we can set how much a second, minite, hour and a day is.
  const textDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const textHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const textMinute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const textSecond = Math.floor((gap % (1000 * 60)) / 1000);

  // Insert the const in the classes so we can print it to the html
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
  document.querySelector(".currentAge").innerHTML = currentYear - 1999;

}, 1000); //This makes the script visually update every second
