// Set the date we're counting down to

countdown('team1-coundown',"Nov 23 2022 18:00:00 GMT+0800")
countdown('team2-coundown',"Nov 23 2022 21:00:00 GMT+0800")
countdown('team3-coundown',"Nov 24 2022 00:00:00 GMT+0800")
countdown('team4-coundown',"Nov 24 2022 3:00:00 GMT+0800")

function countdown(element,time){
    var countDownDate = new Date(time).getTime();
    console.log(countDownDate)
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById(element).innerHTML = "<span>Count: </span>"+hours + ":"
    + minutes + ":" + seconds + "";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById(element).innerHTML = "Trận đấu đã diễn ra";
    }
    }, 1000);
}