let box = document.getElementsByClassName('box');
let Tbox = document.getElementsByClassName('tbox');
let Tamount = document.getElementById('tamount');
let fbox = document.getElementById('fbox');
let sbox = document.getElementById('sbox');
let tbox = document.getElementById('tbox');
let fobox = document.getElementById('fobox');
let fibox = document.getElementById('fibox');
let tfbox = document.getElementById('tfbox');
let tsbox = document.getElementById('tsbox');
let ttbox = document.getElementById('ttbox');
let tfobox = document.getElementById('tfobox');
let tfibox = document.getElementById('tfibox');
let amount = document.getElementById('amount');

fbox.onclick = function() {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = 'transparent';
    }
    fbox.style.backgroundColor = 'aqua';
    amount.innerText = '1';
}

sbox.onclick = function() {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = 'transparent';
    }
    fbox.style.backgroundColor = 'aqua';
    sbox.style.backgroundColor = 'aqua';
    amount.innerText = '2';
}

tbox.onclick = function() {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = 'transparent';
    }
    fbox.style.backgroundColor = 'aqua';
    sbox.style.backgroundColor = 'aqua';
    tbox.style.backgroundColor = 'aqua';
    amount.innerText = '3';
}

fobox.onclick = function() {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = 'transparent';
    }
    fbox.style.backgroundColor = 'aqua';
    sbox.style.backgroundColor = 'aqua';
    tbox.style.backgroundColor = 'aqua';
    fobox.style.backgroundColor = 'aqua';
    amount.innerText = '4';
}

fibox.onclick = function() {
    for(let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = 'transparent';
    }
    fbox.style.backgroundColor = 'aqua';
    sbox.style.backgroundColor = 'aqua';
    tbox.style.backgroundColor = 'aqua';
    fobox.style.backgroundColor = 'aqua';
    fibox.style.backgroundColor = 'aqua';
    amount.innerText = '5';
}

let userReview = document.getElementsByClassName('user-review');
let userReviewBox = document.getElementsByClassName('user-review-box');
let userReviewAmount = document.getElementsByClassName('user-review-amount');
let UserReviewDesc = document.getElementsByClassName('desc');
let readReviews = document.getElementById('read');
let furb = document.getElementById('furb');
let surb = document.getElementById('surb');
let turb = document.getElementById('turb');
let fourb = document.getElementById('fourb');
let fiurb = document.getElementById('fiurb');
let closeReviews = document.getElementById('close');
let reviews = document.getElementById('reviews-c');
let reviewDescription = ["I'm extremely disappointed with this website. The user interface is confusing, and the navigation is a complete mess. The loading times are unbearable, and the overall design feels outdated. I encountered numerous bugs and errors while trying to use the features. It's frustrating and unreliable. I wouldn't recommend this website to anyone.", "This website has some potential, but it falls short in many areas. The layout is decent, but the user experience needs improvement. The loading speed is average, but there are occasional glitches that disrupt the flow. The content is somewhat useful, but it could be better organized. Overall, it's a mediocre experience that could benefit from significant enhancements.","This website has its pros and cons. The design is visually appealing, and the navigation is fairly intuitive. The loading times are generally acceptable, but occasionally it lags. The content provided is informative, although some areas could use more depth. It's an average website that does the job, but there's room for improvement to make it more engaging and reliable.", "I really enjoy using this website. The user interface is clean and modern, making it a pleasure to navigate. The loading times are quick, and I haven't encountered any major issues. The content is well-presented, and it provides a good amount of valuable information. With a few minor improvements, this website could become even better.", "This website is outstanding! The design is stunning, and the user experience is seamless. It loads lightning-fast, ensuring a smooth browsing experience. The content is top-notch, comprehensive, and up-to-date. I appreciate the attention to detail and the overall quality of this website. It sets the bar high for others in its category. Highly recommended!"];
let reviewUsers = ["Nerd", "Jecha", "Juma", "James", "Peter", "Lars", "Timmy"];
let reviewC = document.getElementById('review-c');

readReviews.onclick = function() {
    reviews.style.display = 'flex';
}

window.onload = function review() {
    for(let i = 0; i < userReviewBox.length; i++) {
        userReviewBox[i].style.backgroundColor = 'transparent';
    }
    let totalReviews = []
    for(let i = 0; i < userReview.length; i++){
        let randomNum = Math.floor(Math.random() * 6);
        totalReviews.push(randomNum);
        if(randomNum <= 1) {
            userReview[i].querySelectorAll('.user-review-box')[0].style.backgroundColor = 'aqua';
            UserReviewDesc[i].innerHTML = reviewDescription[0];
            userReviewAmount[i].innerText = '1';
        }
        
        if(randomNum == 2) {
            userReview[i].querySelectorAll('.user-review-box')[0].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[1].style.backgroundColor = 'aqua';
            UserReviewDesc[i].innerHTML = reviewDescription[1];
            userReviewAmount[i].innerText = '2';
        }
        
        if(randomNum == 3) {
            userReview[i].querySelectorAll('.user-review-box')[0].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[1].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[2].style.backgroundColor = 'aqua';
            UserReviewDesc[i].innerHTML = reviewDescription[2];
            userReviewAmount[i].innerText = '3';
        }
        
        if(randomNum == 4) {
            userReview[i].querySelectorAll('.user-review-box')[0].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[1].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[2].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[3].style.backgroundColor = 'aqua';
            UserReviewDesc[i].innerHTML = reviewDescription[3];
            userReviewAmount[i].innerText = '4';
        }
        
        if(randomNum == 5) {
            userReview[i].querySelectorAll('.user-review-box')[0].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[1].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[2].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[3].style.backgroundColor = 'aqua';
            userReview[i].querySelectorAll('.user-review-box')[4].style.backgroundColor = 'aqua';
            UserReviewDesc[i].innerHTML = reviewDescription[4];
            userReviewAmount[i].innerText = '5';
        }
    }
    let totalReviewsAmount = 0;
    for(let i = 0; i < totalReviews.length; i++){
        totalReviewsAmount += totalReviews[i]
    }
    totalReviewsAmount = totalReviewsAmount / totalReviews.length
    totalReviewsAmount = Math.round(totalReviewsAmount)
    if(totalReviewsAmount == 1){
        for(let i = 0; i < Tbox.length; i++) {
            Tbox[i].style.backgroundColor = 'transparent';
        }
        tfbox.style.backgroundColor = 'aqua';
        Tamount.innerText = '1';
    }
    else if(totalReviewsAmount == 2){
        for(let i = 0; i < Tbox.length; i++) {
            Tbox[i].style.backgroundColor = 'transparent';
        }
        tfbox.style.backgroundColor = 'aqua';
        tsbox.style.backgroundColor = 'aqua';
        Tamount.innerText = '2';
    }
    else if(totalReviewsAmount == 3){
        for(let i = 0; i < Tbox.length; i++) {
            Tbox[i].style.backgroundColor = 'transparent';
        }
        tfbox.style.backgroundColor = 'aqua';
        tsbox.style.backgroundColor = 'aqua';
        ttbox.style.backgroundColor = 'aqua';
        Tamount.innerText = '3';
    }
    else if(totalReviewsAmount == 4){
        for(let i = 0; i < Tbox.length; i++) {
            Tbox[i].style.backgroundColor = 'transparent';
        }
        tfbox.style.backgroundColor = 'aqua';
        tsbox.style.backgroundColor = 'aqua';
        ttbox.style.backgroundColor = 'aqua';
        tfobox.style.backgroundColor = 'aqua';
        Tamount.innerText = '4';
    }
    else if(totalReviewsAmount == 5){
        for(let i = 0; i < Tbox.length; i++) {
            Tbox[i].style.backgroundColor = 'transparent';
        }
        tfbox.style.backgroundColor = 'aqua';
        tsbox.style.backgroundColor = 'aqua';
        ttbox.style.backgroundColor = 'aqua';
        tfobox.style.backgroundColor = 'aqua';
        tfibox.style.backgroundColor = 'aqua';
        Tamount.innerText = '5';
    }
    console.log(totalReviewsAmount);
}

closeReviews.onclick = function() {
    reviews.style.display = 'none';
}