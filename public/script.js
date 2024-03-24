//client side script side 
const userVideo = document.getElementById('user-video');
const startButton = document.getElementById('startbtn');

const state ={media: null}
const socket = io()


startButton.addEventListener('click', () =>{
   const mediaRecorder = new MediaRecorder(state.media , {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 250000,
    frameRate: 25
   })

   mediaRecorder.ondataavailable = ev => {
    console.log('binary available', ev.data)
    socket.emit('binarystream' , ev.data)
}
mediaRecorder.start(25)}
)
window.addEventListener('load' , async e=> {
  const media = await navigator
  .mediaDevices
  .getUserMedia({audio: true ,video: true});
  state.media = media;

  userVideo.srcObject=media
})