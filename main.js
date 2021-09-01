// const $today = new Date();
// const $time = $today.getHours() + ":" + $today.getMinutes() + ":" + $today.getSeconds();
// console.log($time);

// const $date = document.querySelector('.clock-display');
// console.log($date);
// $date.textContent = $time;

// const color = document.querySelectorAll('div');
// console.log(color);

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
  
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm;
  
    document.querySelector('.clock-display')
            .innerHTML = currentTime;
}
showTime();
// console.log(showTime());
// document.querySelector('.clock-display').style.font = 'sans';
// document.querySelector('.clock').style.color = "green";
document.querySelector('.clock-face').style.color = "red";

document.querySelector('.clock').addEventListener("click", changeColor);
function changeColor() {
    document.body.style.backgroundColor = "green";
    return false;
}

// document.querySelector('.clcok-display').addEventListener("mouseover", myScript);

// function mouseOver(){
//     document.querySelector('.clcok-display') = 
    

document.querySelector('.clock-face').style = randomColor;

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
   
  }
  
  document.querySelector('.clock-face').addEventListener("load", setBg);
  setInterval(setBg,1000);