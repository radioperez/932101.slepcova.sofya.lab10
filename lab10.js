const curtain = document.getElementById("curtain");
const lamp = document.getElementById("lamp");
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
