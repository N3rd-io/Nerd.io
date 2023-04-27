const nav = document.getElementById('nav');
const dropdown = document.getElementById('dropdown');
const dropdown_menu = document.getElementById('dropdown-menu');
const dropdonw_links = document.getElementById('dropdown-links');
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
        cards.scrollLeft += 800
        auto = 1
    }
    else{
        auto += 1
        cards.scrollLeft -= 200
        document.getElementById('test').innerHTML = auto;
    }
}

function auto_next(){
    if(auto == 1){
        cards.scrollLeft -= 800
        auto = card.length
    }
    else{
        auto -= 1
        cards.scrollLeft += 200
    }
}

setInterval(auto_next, 5000)

addEventListener('resize', function(){
    const new_window = window.innerWidth
    if(new_window < 1260){
        cards.style.width = '400px';
        cards.style.height = '80vh';
        cards.style.margin = '5% auto';
        cards.style.overflow = 'scroll';
        cards.style.justifyContent = 'space-between';
        cards.style.gap = '30px';
        card_controls.style.display = 'flex';
    }
    else{
        cards.style.width = '100%';
        cards.style.overflow = 'visible';
        cards.style.justifyContent = 'center';
        cards.style.gap ='10px';
        card_controls.style.display = 'none';
    }
})

if(window_size < 1260){
    cards.style.width = '400px';
    cards.style.height = '80vh';
    cards.style.margin = '5% auto';
    cards.style.overflow = 'scroll';
    cards.style.justifyContent = 'space-between';
    cards.style.gap = '30px';
    card_controls.style.display = 'flex';
}
else{
    cards.style.width = '100%';
    cards.style.overflow = 'visible';
    cards.style.justifyContent = 'center';
    cards.style.gap ='10px';
    card_controls.style.display = 'none';
}