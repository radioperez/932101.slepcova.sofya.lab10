const curtain = document.getElementById("curtain");
const lamp = document.getElementById("lamp");
const light = document.getElementById("light");
const stage = document.getElementById("stage");
const wizard = document.getElementById("wizard");
const hat = document.getElementById("hat");
const hat_content = document.getElementById("hat-content");

curtain.addEventListener("click", function(){
	this.style.top = "-100%";
	this.style.transition = "top 1s";
});

lamp.addEventListener("mousedown", function(){
	this.src = "lamp2.png";
});
lamp.addEventListener("mouseup", function(){
	this.src = "lamp1.png";
});

let lampState = false;
lamp.addEventListener("click", function() {
	if (lampState) { 
		light.style.opacity = "0";
		stage.style.display = "none";
	}
	else {
		light.style.opacity = "0.5";
		stage.style.display = "block";
	}
	lampState = !lampState;
});

let isBunny = true;
let isInHat = false;
hat_content.addEventListener("click", function(){
	if (isInHat == false) {
		this.style.top = "200px";
		this.style.transition = "top 0.5s, opacity 1s";
		this.style.opacity = "0";
		this.style.pointerEvents = "none";
	}
	isInHat = !isInHat;
});

hat.addEventListener("click", function(){
	if (isInHat) {
		if (isBunny) hat_content.src = "pigeon.png";
		else hat_content.src = "bun.png";
		isBunny = !isBunny;
		hat_content.style.opacity = "1";
		hat_content.style.top = "0px";
		hat_content.style.transition = "top 0.5s, opacity 1s";
		hat_content.style.pointerEvents = "auto";
		isInHat = false;
	}
});