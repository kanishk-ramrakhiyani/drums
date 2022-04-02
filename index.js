 var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "w":
	var sound1 = new Audio("sounds/crash.mp3");
	sound1.play();
     console.log("hello"+key);
	break;

	case "a":
	var sound2 = new Audio("sounds/kick-bass.mp3");
	sound2.play();
     console.log("hello"+key);
	break;

	case "s":
	var sound3 = new Audio('sounds/snare.mp3');
	sound3.play();
     console.log("hello"+key);
	break;

	case "d":
	var sound4 = new Audio('sounds/tom-1.mp3');
	sound4.play();
     console.log("hello"+key);
	break;

	case "j":
	var sound5 = new Audio('sounds/tom-2.mp3');
	sound5.play();
     console.log("hello"+key);
	break;

	case "k":
	var sound6 = new Audio('sounds/tom-3.mp3');
	sound6.play();
     console.log("hello"+key);
	break;

	case "l":
	var sound7 = new Audio('sounds/tom-4.mp3');
	sound7.play();
    console.log("hello"+key);
	break;

	default: console.log(key);
}
}


