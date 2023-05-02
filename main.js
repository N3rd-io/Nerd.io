const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown');
const dropdown_menu = document.getElementById('dropdown-menu');
const dropdonw_links = document.getElementById('dropdown-links');
const container_left = document.getElementById('container-left');
const container_right = document.getElementById('container-right');
const about_container = document.getElementById('about-container-items');
let windowWidth = window.innerWidth;

window.addEventListener('resize', function() {
  const newWidth = window.innerWidth;

  if (newWidth !== windowWidth) {
    windowWidth = newWidth;

    if(windowWidth < 900){
        dropdown.style.display = 'flex';
        nav.style.display = 'none';
    }
    else{
        dropdown.style.display = 'none';
        nav.style.display = 'flex';
    }
  }
});

let isVisible = false;

if ( window.innerWidth < 1260 ) {
  dropdown.style.display = 'flex';
  nav.style.display = 'none';
}

dropdown_menu.onclick = function scale(){
    if(isVisible == false){
        dropdonw_links.style.transform = "scale(1)";
        isVisible = true
    }
    else if(isVisible == true){
        dropdonw_links.style.transform = "scale(0)";
        isVisible = false
    }
};

let window_size = window.innerWidth;
let card_controls = document.getElementById('card-controls');
let card_next = document.getElementById('card-next');
let card_prev = document.getElementById('card-prev');
let cards = document.getElementById('cards');
let card = document.getElementsByClassName('card-b');
let auto = card.length

card_prev.onclick = function(){
    if(auto == card.length){
        cards.scrollTop += 1000
        auto = 1
    }
    else{
        auto += 1
        cards.scrollTop -= 600
    }
}

function auto_next(){
    if(auto == 1){
        cards.scrollTop -= 1000
        auto = card.length
    }
    else{
        auto -= 1
        cards.scrollTop += 600
    }
}

setInterval(auto_next, 5000)

addEventListener('resize', function(){
    const new_window = window.innerWidth
    if(new_window < 1260){
        container_left.style.width = '90%';
        container_right.style.display = 'none';
        container_left.style.borderRight = 'none';
        about_container.style.flexDirection = 'column';
        cards.style.width = '400px';
        cards.style.height = '80vh';
        cards.style.margin = '5% auto';
        cards.style.overflow = 'scroll';
        cards.style.justifyContent = 'space-between';
        cards.style.gap = '30px';
        card_controls.style.display = 'flex';
    }
    else{
        about_container.style.flexDirection = 'row';
        container_left.style.borderRight = 'solid medium aqua';
        container_right.style.display = 'block';
        container_left.style.width = '35%';
        container_right.style.width = '65%';
        cards.style.width = '100%';
        cards.style.height = 'max-content';
        cards.style.overflow = 'visible';
        cards.style.justifyContent = 'center';
        cards.style.gap ='10px';
        card_controls.style.display = 'none';
    }
})

if(window.innerWidth < 1260){
    container_left.style.width = '90%';
    container_right.style.display = 'none';
    container_left.style.borderRight = 'none';
    about_container.style.flexDirection = 'column';
    cards.style.width = '400px';
    cards.style.height = '80vh';
    cards.style.margin = '5% auto';
    cards.style.overflow = 'scroll';
    cards.style.justifyContent = 'space-between';
    cards.style.gap = '30px';
    card_controls.style.display = 'flex';
}
else{
    about_container.style.flexDirection = 'row';
    container_left.style.borderRight = 'solid medium aqua';
    container_right.style.display = 'block';
    container_left.style.width = '35%';
    container_right.style.width = '65%';
    cards.style.width = '100%';
    cards.style.height = 'max-content';
    cards.style.overflow = 'visible';
    cards.style.justifyContent = 'center';
    cards.style.gap ='10px';
    card_controls.style.display = 'none';
}

const date = new Date();
let hour = date.getHours();
let checked = document.getElementById('status');
let check;

if(hour < 5 || hour > 10){
    check = "Online.";
    checked.style.color = "green";
}

else{
    check = "Offline.";
    checked.style.color = "red";
}


var typed = new Typed(".status", {
    strings: [ check,
    ],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true,
})