var indicators = document.getElementsByClassName("carousel-control-prev");
var indicatorsNext = document.getElementsByClassName("carousel-control-next");
var slide = document.getElementsByClassName("carousel slide");
var slideImg = document.getElementsByClassName("slide-img");
var hours = document.getElementById("hour");
var minutes = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var navR = document.getElementsByClassName("nav-r");
var nerd1 = document.getElementById("nerd");
var nerd2 = document.getElementById("nerd2");
var nerd3 = document.getElementById("nerd3");
var code = document.getElementById("code");
var clips = document.getElementsByClassName("clip");
var vidt = document.getElementsByClassName("vidt");
var cube = document.getElementsByClassName("cube")
var cards = document.getElementsByClassName("card-c")
var card = document.getElementsByClassName("card")
var conter = document.getElementsByClassName("jo")

if(window.innerWidth < 1115){
    for(let y = 0; y < slideImg.length; y++){
        slideImg[y].classList.remove("d-block")
        slideImg[y].style.maxWidth = "100%"
    }
    for(let i = 0; i < card.length; i++){
        card[i].style.width = "90%"
        card[i].style.transform = "rotateX(0deg)"
    }
    nerd2.remove();
    conter[0].style.maxWidth = "100%"
    cube[0].remove();
    cards[0].style.flexDirection = "column"
    cards[0].style.alignContent = "center"
}

var date = new Date();

    if(date.getHours() <= 9){
        hours.textContent = `0${date.getHours()}`;
    }
    else if(date.getHours() >= 10){
        hours.textContent = date.getHours();
    };

    if(date.getMinutes() <= 9){
        minutes.textContent = `0${date.getMinutes()}`;
    }
    else if(date.getMinutes() >= 10){
        minutes.textContent = date.getMinutes();
    };

    if(date.getSeconds() <= 9){
        seconds.textContent = `0${date.getSeconds()}`;
    }
    else if(date.getSeconds() >= 10){
        seconds.textContent = date.getSeconds();
    }

var bestClips = [
    "./images/Chinese accent.mp4",
    "./images/gow.mp4",
    "./images/sad.mp4",
    "./images/sip.mp4",
]

    var clipn = Math.floor(Math.random() * bestClips.length);

card[0].ondblclick = function redirect0(){window.open("https://callofduty.fandom.com/wiki/Simon_%22Ghost%22_Riley", "_blank")}
card[1].ondblclick = function redirect1(){window.open("https://reddead.fandom.com/wiki/John_Marston","_blank")}
card[2].ondblclick = function redirect2(){window.open("https://godofwar.fandom.com/wiki/Kratos","_blank")}
