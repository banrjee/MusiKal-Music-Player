console.log("Welcome to MusiKal");
let songIndex=0;
let audioElement= new Audio('Kesariya_320(PagalWorld.com.se).mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let songs = [
    {songName: "Kesariya", filepath: "song/Kesariya_320(PagalWorld.com.se).mp3", coverpath: "covers/cover.jpeg"},
    {songName: "Kesariya", filepath: "song/Kesariya_320(PagalWorld.com.se).mp3", coverpath: "covers/cover.jpeg"},
    {songName: "Kesariya", filepath: "song/Kesariya_320(PagalWorld.com.se).mp3", coverpath: "covers/cover.jpeg"},
    {songName: "Kesariya", filepath: "song/Kesariya_320(PagalWorld.com.se).mp3", coverpath: "covers/cover.jpeg"}
]
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused||audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-2x fa-play');
        masterPlay.classList.add('fa-solid fa-2x fa-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-2x fa-pause');
        masterPlay.classList.add('fa-solid fa-2x fa-play');

    }
})

audioElement.addEventListener('timeupdate', ()=>{
  console.log('timeupdate');
  progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  myProgressBar.value= progress;
})
