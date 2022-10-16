let elemsecond = document.getElementById('seconds');
let elemminute = document.getElementById('minutes');
let elemhour = document.getElementById('hour');
let startbtn = document.getElementsByClassName('start');
let starts;
let second = 1;
let minutes = 0;
let hours = 0;






function stopwatch() {
    if (second <= 60) {


        elemsecond.innerHTML = second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

        second++;

        elemsecond.classList.add('secondsrotate');
        elemminute.style.transform = rotateX(`30deg`);



    } else {
        second = 0;
        minutes++;
    }

    if (minutes < 60) {
        elemminute.innerHTML = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    }
    else {
        minutes = 0;
        hours++;
    }

    elemhour.innerHTML = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

}



function start() {

    starts = setInterval(stopwatch, 1000);
    console.log(starts);

};

function stop() {
    elemsecond.classList.remove('secondsrotate');

    clearInterval(starts);
}

function reset() {
    clearInterval(starts);
    second = 0;
    minutes = 0;
    hours = 0;
    elemsecond.innerHTML = second.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    elemminute.innerHTML = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    elemhour.innerHTML = hours.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
}
