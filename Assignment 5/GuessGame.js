   var numAndCompDiff = function(x, y) {
        return Math.abs(x - y);
    };

    // Generate Computer Number
    var compNum = Math.floor((Math.random() * 10) + 1);
    // Attempt Number
    var numAttempts = 1;

    var hintFunction = function() {
       
        var enterNum = $("#enterNum").val();
       
        var diffTotal = numAndCompDiff(enterNum, compNum);
     
        if (isNaN(enterNum) || enterNum === "") {
            $(".gameStatusAlert").html("You Must Enter\n a Number to Start")
        } else if (diffTotal <= 1 && diffTotal > 0) {
            $("html body").animate({
                backgroundColor: "#ba0000"
            }, 1000);
            $(".gameStatusAlert").html("You're Hot <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 2 && diffTotal <= 2) {
            $("html body").animate({
                backgroundColor: "#e84700"
            }, 1000);
            $(".gameStatusAlert").html("You're Really Warm <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 3 && diffTotal <= 3) {
            $("html body").animate({
                backgroundColor: "#e88800"
            }, 1000);
            $(".gameStatusAlert").html("You're Warm <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 4 && diffTotal <= 4) {
            $("html body").animate({
                backgroundColor: "#3bcde7"
            }, 1000);
            $(".gameStatusAlert").html("You're Cold <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else if (diffTotal >= 5) {
            $("html body").animate({
                backgroundColor: "#a3effd"
            }, 1000);
            $(".gameStatusAlert").html("You're Freezing <br><small>Guess Again</small>");
            $(".attempts").html(numAttempts + " of 5 ");


        } else {
            $("html body").animate({
                backgroundColor: "#a4d741"
            }, 1000);
            $(".gameStatusAlert").html("You're correct, the number was " + compNum);
            $("#startOverBtn").css("display", "block");

        }
    } 


    $("#startOverBtn").click(function() {
        numAttempts = 0;
        $(".gameStatusAlert,.attempts,#startOverBtn").hide();
        $("#enterNum").val("");
        $("html body").animate({
            backgroundColor: "#4c5562"
        }, 1000);
    });


    //To be able to click return key
    $('#enterNum').keydown(function(event) {
        if (event.keyCode == 13) {
            $('#enterBtn').trigger('click');

        }
    });

    $(document).ready(function() {

        $("#enterBtn").click(function(enterNum) {
            hintFunction();
            $(".gameStatusAlert,.attempts,#startOverBtn").show();
         
            numAttempts++
            //stop game after 5 attempts
            if (numAttempts === 6 && enterNum !== compNum) {
                $(".gameStatusAlert").html("You Lost, the correct number was " + compNum);
                $("#startOverBtn").css("display", "block");
                $("html body").animate({
                    backgroundColor: "#4c5562"
                }, 1000);
                event.preventDefault();
            }
        });


    });
 