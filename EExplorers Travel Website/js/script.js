let navbarDiv = document.querySelector('.navbar');
let videoElementBtn = document.getElementById('play-btn');
let videoElm = new Audio ('./videos/Hotel Video.mp4');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

videoElementBtn.addEventListener('click', ()=> {
    if(videoElm .paused || videoElm .currentTime <= 0) {
        videoElm .play();
        videoElementBtn.classList.remove('fas fa-play');
        videoElementBtn.classList.add('fas fa-pause');
        

    }
    else {
        videoElm .pause();
        videoElementBtn.classList.remove('fas fa-pause');
        videoElementBtn.classList.add('fas fa-pause');
        
    }
})