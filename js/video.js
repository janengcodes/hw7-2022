var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	const vol = document.querySelector("#slider").value;
	video.volume = vol/100;
});
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});