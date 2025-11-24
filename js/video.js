var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	// Initialize the video element
	video = document.querySelector("#player1");
	
	// Turn off autoplay and looping
	video.autoplay = false;
	video.loop = false;
	
	// Update initial volume display
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

// Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// Update the volume display when playing
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
});

// Pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down button
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate);
});

// Speed Up button
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("Speed is", video.playbackRate);
});

// Skip Ahead button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	// If crossing the video duration, wrap to the beginning
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current time is", video.currentTime);
});

// Mute button
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// Volume slider
document.querySelector("#slider").addEventListener("input", function() {
	console.log("Volume Slider");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
});

// Old School (Styled) button
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

// Original button
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

