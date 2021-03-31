import "regenerator-runtime/runtime";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user toselect the media striam, pass ot video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      vodeoElement.play();
    };
  } catch (error) {
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On load
selectMediaStream();
