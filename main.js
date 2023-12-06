setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  document.querySelector(".clock-display").innerHTML = currentTime;
  console.log(currentTime);

  const percentageTime = sec / 60;
  console.log(percentageTime);

  document.querySelector(".clock-progress-bar").style.width =
    14 * percentageTime + "rem";

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.querySelector(".clock").style.background = "#" + randomColor;
  console.log("#" + randomColor);

  const clockDisplay = document.querySelector(".clock-display");

  clockDisplay.addEventListener("mouseover", () => {
    clockDisplay.innerHTML = "#" + randomColor;
  });
  if (clockDisplay.matches(":hover")) {
    clockDisplay.innerHTML = "#" + randomColor;
  }
}
showTime();

const currentDate = Date.now();
const newDate = new Date(currentDate);
console.log(newDate.toString());

document.querySelector(".clock-face").style.color = "black";

document.querySelector(".clock").addEventListener("load", showTime);
