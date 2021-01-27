var minutes = 25;
var seconds = "00";
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");


function template() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

function start() {
    click.play()

    minutes = 24;
    seconds = 59;

    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000)
    var seconds_interval = setInterval(secondsTimer, 1000)

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById("minutes").innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById("seconds").innerHTML = seconds;
        
        if(seconds <= 57){
            if(minutes <= 24){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                document.getElementById("done").classList.toggle('hide-message');
                bell.play();

            }
            seconds = 60;
        }
        if(seconds===0){
            seconds = "00";
        }
    }
}

function reset(){
    minutes = 25;
    seconds = 0;
    template();
    document.getElementById('done').classList.add('hide-message');
} // Connect this to the reset button on the front-end