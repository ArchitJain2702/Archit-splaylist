console.log('welcome to js');
//initialize the variables
let songindex =0;
let audioelement =  new Audio();
let masterplay =document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');

let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Arjan Vailly" ,filePath: "new songs/animal.mp3" ,coverPath: "new cover/1.jpg"},
    { songName: "Die With a Smile" ,filePath: "new songs/Die With a Smile.mp3" ,coverPath: "new cover/2.jpeg"},
    { songName: "Feeling Good" ,filePath: "new songs/Feeling Good.mp3" ,coverPath: "new cover/3.jpg"},
    { songName: "Millionare_Honey Singh" ,filePath: "new songs/honey singh.mp3" ,coverPath: "new cover/4.jpg"},
    { songName: "Hymm For The Weekend" ,filePath: "new songs/Hymm For The Weekend.mp3" ,coverPath: "new cover/5.jpg"},
    { songName: "Imagine_Dragon:Demons" ,filePath: "new songs/Imagine_Dragon Demons.mp3" ,coverPath: "new cover/6.jpg"},
    { songName: "NF_Hope" ,filePath: "new songs/NF_Hope.mp3" ,coverPath: "new cover/7.jpg"},
    { songName: "NF_the Search" ,filePath: "new songs/NF_the Search.mp3" ,coverPath: "new cover/8.jpg"},
    { songName: "NF_When I Grow Up" ,filePath: "new songs/NF_When I Grow Up.mp3" ,coverPath: "new cover/9.jpg"},
    { songName: "See You Again" ,filePath: "new songs/See You Again.mp3" ,coverPath: "new cover/10.jpg"},
]
songitem.forEach((element ,i) =>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerHTML = songs[i].songName;
})
//handle play pause click
masterplay.addEventListener('click' ,()=>{
    if(audioelement.paused || audioelement.currentTime <= 0){
        audioelement.play();
    gif.style.opacity =1;
    }
    else{
        audioelement.pause();
        gif.style.opacity =0;
    }
})
//listen to events
audioelement.addEventListener('timeupdate' , ()=>{
//update seekbar
progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
myprogressbar.value = progress;
})
myprogressbar.addEventListener('change' ,() =>{
    audioelement.currentTime = (myprogressbar.value*audioelement.duration)/100;
})
Array.from(document.getElementsByClassName('songitem')).forEach((element,index) =>{     
    element.addEventListener('click', (e)=>{
       
            songindex = index;
       
        audioelement.src = songs[songindex].filePath + `?t=${new Date().getTime()}`;
        audioelement.load();



    mastersongname.innerText = songs[songindex].songName;

    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity =1;
    }) ;
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex >=9){
      songindex =0;
    } 
    else{
        songindex += 1;
    }
    audioelement.src = songs[songindex].filePath + `?t=${new Date().getTime()}`;
    audioelement.load();

    mastersongname.innerText = songs[songindex].songName;

    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity =1;
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex <=0){
      songindex =9;
    } 
    else{
        songindex -= 1;
    }
    audioelement.src = songs[songindex].filePath + `?t=${new Date().getTime()}`;
    audioelement.load();

    mastersongname.innerText = songs[songindex].songName;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity =1;
})
