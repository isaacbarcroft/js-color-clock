const progressBar = document.querySelector('.clock-progress-bar')
const clock = document.querySelector('.clock');
const color = ['#DF5D69', '#D99A5A']
const display = document.querySelector('.clock-display');

let index = 0;
let isHovering = false;

clock.addEventListener('mouseover', function () {
    isHovering = true;
});
clock.addEventListener('mouseout', function () {
    isHovering = false;
});

function setDate() {
    const now = new Date();
    let seconds, hours, min;

    if (isHovering) {
        secondsHex = ('0' + now.getSeconds().toString(16)).slice(-2)
        minutesHex = ('0' + now.getSeconds().toString(16)).slice(-2)
        hourHex = ('0' + now.getSeconds().toString(16)).slice(-2)
    } else {
        seconds = ('0' + now.getSeconds()).slice(-2); //pads with a ZERO // slice 022 = 22 // slice off last two
        min = ('0' + now.getMinutes()).slice(-2);
        hours = ('0' + now.getHours()).slice(-2);
    }

    seconds = ('0' + now.getSeconds()).slice(-2); //pads with a ZERO // slice 022 = 22 // slice off last two
    min = ('0' + now.getMinutes()).slice(-2);
    hours = ('0' + now.getHours()).slice(-2);

    display.innerHTML = `${hours}:${min}:${seconds}`;

    console.log(hours, min, seconds);
    console.log(seconds / 60);
    progressBar.style.width = `${seconds / 60 * 14}rem`

    secondsHex = ('0' + now.getSeconds().toString(16)).slice(-2)
    minutesHex = ('0' + now.getSeconds().toString(16)).slice(-2)
    hourHex = ('0' + now.getSeconds().toString(16)).slice(-2)

}
function setBackground() {

    clock.style.backgroundColor = `${color[index]}`;
    index === color.length - 1 ? index = 0 : index++;
    // if(index === colors.length - 1){
    //     index = 0;
    // } else {
    //     index = index + 1;
    // }

}

setInterval(setDate, 1000);
setInterval(setBackground, 5000);