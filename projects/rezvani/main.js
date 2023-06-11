let dots = document.querySelectorAll('.dot');
let description = document.querySelectorAll('.desc');
let top1 = window.scrollY;


function turnblack() {
    for ( let x = 0; x < description.length; x++ ) {
        description[x].style.color = 'black';
    }

    for ( let i = 0; i < dots.length; i++ ) {
        if (!dots[i].classList.contains("active")){
            dots[i].style.backgroundColor = 'black';
        }
        else {
            dots[i].style.backgroundColor = 'transparent';
            dots[i].style.border = 'solid thin black';
        }
    }
}

function turnwhite() {
    for ( let x = 0; x < description.length; x++ ) {
        description[x].style.color = 'white';
    }

    for(let i = 0; i < dots.length; i++) {
        if (!dots[i].classList.contains("active")){
            dots[i].style.backgroundColor = 'white';
        }
        else {
            dots[i].style.backgroundColor = 'transparent';
            dots[i].style.border = 'solid thin white';
        }
    }
}

if ( top1 >= 310 && top1 <= 950 ) {
    for( let i = 0; i < dots.length; i++ ) {
        if( dots[i].classList.contains("active") ) {
            dots[i].classList.remove("active");
            dots[0].classList.add("active");
        }
        else {
            dots[i].style.border = 'none';
        }
    }
    turnblack();
}

else if ( top1 >= 950 && top1 <= 1570 ) {
    for( let i = 0; i < dots.length; i++ ) {
        if( dots[i].classList.contains("active") ) {
            dots[i].classList.remove("active");
            dots[1].classList.add("active");
        }
        else {
            dots[i].style.border = 'none';
        }
    }
    turnwhite();
}

else if ( top1 >= 1570 && top1 <= 2200 ) {
    for( let i = 0; i < dots.length; i++ ) {
        if( dots[i].classList.contains("active") ) {
            dots[i].classList.remove("active");
            dots[2].classList.add("active");
        }
        else {
            dots[i].style.border = 'none';
        }
    }
    turnwhite();
}

else if ( top1 >= 2200 && top1 <= 2840) {
    turnblack();
}

else if ( top1 >= 2840 && top1 <= 3510) {
    turnwhite();
}

else if ( top1 >= 3510) {
    for( let i = 0; i < dots.length; i++ ) {
        if( dots[i].classList.contains("active") ) {
            dots[i].classList.remove("active");
            dots[3].classList.add("active");
        }
        else {
            dots[i].style.border = 'none';
        }
    }
    turnblack();
}

else {
    turnwhite();
}

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if ( scrolled >= 310 && scrolled <= 950 ) {
        for( let i = 0; i < dots.length; i++ ) {
            if( dots[i].classList.contains("active") ) {
                dots[i].classList.remove("active");
                dots[0].classList.add("active");
            }
            else {
                dots[i].style.border = 'none';
            }
        }
        turnblack();
    }

    else if ( scrolled >= 950 && scrolled <= 1570 ) {
        for( let i = 0; i < dots.length; i++ ) {
            if( dots[i].classList.contains("active") ) {
                dots[i].classList.remove("active");
                dots[1].classList.add("active");
            }
            else {
                dots[i].style.border = 'none';
            }
        }
        turnwhite();
    }

    else if ( scrolled >= 1570 && scrolled <= 2200 ) {
        for( let i = 0; i < dots.length; i++ ) {
            if( dots[i].classList.contains("active") ) {
                dots[i].classList.remove("active");
                dots[2].classList.add("active");
            }
            else {
                dots[i].style.border = 'none';
            }
        }
        turnwhite();
    }

    else if ( scrolled >= 2200 && scrolled <= 2840) {
        turnblack();
    }

    else if ( scrolled >= 2840 && scrolled <= 3510) {
        turnwhite();
    }

    else if ( scrolled >= 3510) {
        for( let i = 0; i < dots.length; i++ ) {
            if( dots[i].classList.contains("active") ) {
                dots[i].classList.remove("active");
                dots[3].classList.add("active");
            }
            else {
                dots[i].style.border = 'none';
            }
        }
        turnblack();
    }

    else {
        turnwhite();
    }

})

window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;

    if ( windowWidth > 999 ) {
        main.classList.remove('compr');
        links.style.opacity = '0';
        links.style.zIndex = '-999';
        isVisible = false;
    }
})

let isVisible = false;
let main = document.getElementById('main');
let links = document.getElementById('drop-links');
let expand = document.getElementById('expand');

expand.onclick = function expand() {
    if ( isVisible == false ) {
        main.classList.add('compr');
        links.style.opacity = '1';
        links.style.zIndex = '1';
        isVisible = true;
    }

    else {
        main.classList.remove('compr');
        links.style.opacity = '0';
        links.style.zIndex = '-999';
        isVisible = false;
    }
}
