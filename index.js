

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var ada = this.innerHTML.toLowerCase();
        clickme(ada);
        animation(ada);
    });
}

document.addEventListener("keydown", function (event) {
    clickme(event.key.toLowerCase());
    animation(event.key.toLowerCase());
});

function clickme(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "d":
            new Audio("sounds/snare.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log("Unrecognized key: " + key);
            break;
    }
}

function animation(key) {
    var adar = document.querySelector("." + key);
    if (adar) {
        adar.classList.add("pressed");
        setTimeout(function () {
            adar.classList.remove("pressed");
        }, 200);
    }
}
