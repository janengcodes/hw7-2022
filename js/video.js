var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job on opening the window");
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	const vol = document.querySelector("#slider").value;
	video.volume = vol/100;
	const volText = document.querySelector("#volume");
	volText.innerHTML = `${vol}` + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	let initRate = video.playbackRate;
	video.playbackRate = 0.9 * initRate;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener( "click", function() {
	video.playbackRate = video.playbackRate/0.9;
	console.log(video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	let videoLength = video.duration;
	let newTime = video.currentTime + 10;
	if (newTime > videoLength) {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	else {
		video.currentTime = newTime;
		console.log(video.currentTime);
	}
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0) { // unmute
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else { // mute
		video.muted = true;
		console.log(video.volume);
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	const vol = document.querySelector("#slider").value;
	video.volume = vol/100;
	const volText = document.querySelector("#volume");
	volText.innerHTML = `${vol}` + "%";
})

document.querySelector("#vintage").addEventListener("click", function() { 
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() { 
	video.classList.remove("oldSchool");
})

