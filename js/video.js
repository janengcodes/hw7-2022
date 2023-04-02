var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	const vol = document.querySelector("#slider").value;
	video.volume = vol/100;
	const volText = document.querySelector("#volume");
	volText.innerHTML = `${vol}`;
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
	let initRate = video.playbackRate;
	video.playbackRate = 1.1 * initRate;
	console.log(video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function() {
	let videoLength = video.duration;
	let newTime = video.currentTime + 10;
	if (newTime > videoLength) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log(video.currentTime);
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.volume == 0) { // unmute
		const vol = document.querySelector("#slider").value;
		video.volume = vol/100;
		console.log(vol);
		document.querySelector('#mute').innerHTML = 'Mute';
	}
	else { // mute
		video.volume = 0;
		console.log(video.volume);
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
})

document.querySelector("#slider").addEventListener("click", function() {
	const vol = document.querySelector("#slider").value;
	video.volume = vol/100;
	const volText = document.querySelector("#volume");
	volText.innerHTML = `${vol}`;
})

document.querySelector("#vintage").addEventListener("click", function() { 
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() { 
	video.classList.remove("oldSchool");
})

