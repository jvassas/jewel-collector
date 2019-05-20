//Random number and 4 crystals
//Every crystal has a random value between 1-12
//A new value will be assigned to the crystals everytime the user wins or loses
//When crystal is clicked, it must add to the previous result
//If the user score is higher than the random number, then the lost counter is increased by 1
//If the user score equals the random number, the win counter is increased by 1

var randomResult;
var lost = 0;
var win = 0;
var count = 0;

var gameStartReset = function () {

    $(".crystals").empty();

    var images = [
        'https://st2.depositphotos.com/1274673/9511/i/950/depositphotos_95111146-stock-photo-crystal-on-a-white-background.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGduuxSDKvqDqr-bagaHednw5WlksCxm_dSIx_re9DOk6szVVb', 
        'https://previews.123rf.com/images/photobeps/photobeps1802/photobeps180200987/96426181-isolated-amethyst-crystals-on-white-background.jpg', 
        'https://st2.depositphotos.com/1274673/9511/i/950/depositphotos_95111166-stock-photo-red-crystal-on-a-white.jpg'];

    randomResult = Math.floor(Math.random() * 120) + 19;
    console.log(randomResult);
    $("#random-number").html('Random Number: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        
        });
        

        $(".crystals").append(crystal);
    }

    $("#score").html("Total Score: " + count);
}

gameStartReset();

//event delegation
$(document).on('click', ".crystal", function () {


    var num = parseInt($(this).attr('data-random'));
    count += num;
    $("#score").html("Total Score: " + count);
    if (count > randomResult) {

        lost++;

        $("#losses").html('Losses: ' + lost);

        count = 0;

        gameStartReset();
    }
    else if (count === randomResult) {

        win++;

        $("#wins").html('Wins: ' + win);

        count = 0;

        gameStartReset();
    }
    console.log(count);
});


