function main() {
    var gamestart = false;
    var flagLose = 0;
    var timer = 0;
    $(".boundary").mouseover(function() {
        if (gamestart) {
            $(".boundary").addClass("youlose");
            flagLose = 1;
            $("#status").text("Sorry you Lost :( Click the " + "S" + " to begin.");
            $(".boundary").css("background-color", "red");
        }
    });

    $("#maze").mouseleave(function() {
        if (gamestart) {
            $(".boundary").addClass("youlose");
            flagLose = 1;
            $("#status").text("Sorry you Lost :( Click the " + "S" + " to begin.");
            $(".boundary").css("background-color", "red");
        }
    });

    $("#end").mouseenter(function() {
        if (gamestart) {
            if (flagLose !== 1) {
                $(".boundary").css("background-color", "green");
                $("#status").text("You Won Hurray :D");
                gamestart = false;
            }
        }
    });

    $("#start").click(function() {
        gamestart = true;
        if (flagLose === 1 || gamestart==false) {
            $(".boundary").removeClass("youlose");
            $(".boundary").css("background-color", "#eeeeee");
            flagLose = 0;
        }
    });
}
$(document).ready(main);