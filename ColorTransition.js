

const home = document.body.querySelector('#home');
const thresholds = [];
for(let i=0; i<=1; i+=0.01)
{
    thresholds.push(i);
}

const newObserver = new IntersectionObserver((entry) =>{
    entry.forEach((value) => {
        const homeElement = document.getElementById('home');
        // const aboutElement = document.getElementById('aboutUs');
        homeElement.style.opacity = `${value.intersectionRatio}`;
    })

}, {threshold : thresholds})

newObserver.observe(home);

// ---------------------------
// Annnoucements JS
// ---------------------------

let announce_button = document.querySelector(".announcement-button")
let announce_close_button = document.querySelector(".close-button")
let announce_section = document.querySelector(".announcement-section")
let announce_container = document.querySelector(".announcement-container")

announce_button.addEventListener('click', function(){
    console.log(announce_section)
    announce_section.style.visibility = "visible";
    announce_section.style.opacity = '1';
    announce_section.style.zIndex = '1';
    announce_container.style.top = '0px'
})

announce_close_button.addEventListener('click', function(){
    announce_section.style.opacity = '0';
    announce_container.style.top = "-500px";
    setTimeout(() => {
        announce_section.style.zIndex = '-1';
    }, 300);
        
})


//  OLDER CODE FOR REFERENCE

// // ................Scroll Color Change Js

// let scrolling = false;

// window.addEventListener('scroll', () =>{
//     scrolling = true;
// });


// setInterval(() => {
//     if(scrolling){
//         scrolling = false;
//         colorTransition();
//     }
// }, 40);

// function colorTransition(){
//     const home = document.querySelector('#home');
//     const bodyContent = document.querySelector('#bodyContent');
//     const homeHeight = home.clientHeight;
//     let ratio = home.scrollTop / homeHeight ;
//     if(ratio<=2){
//         document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${1.1*ratio}), rgba(107, 166, 210, ${1.1*ratio})), url(/images/main-background.webp)` ;
//     }
//     else if(ratio>2){
//         document.body.style.backgroundImage = `rgb(107, 166, 210)`;
//     }
// }



// //  .................New Color Transition for About Us

// const aboutUs = document.querySelector('#aboutUs')
// const colorTransitionThresholds = [];

// for(let i=0; i<=1; i+=0.01)
// {
//     colorTransitionThresholds.push(i);
// }

// let previousRatio = 0
// let colorOpacity = 0
// const colorTransitionObersver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         let scrollDirection = entry.intersectionRatio - previousRatio
//         if(entry.isIntersecting && scrollDirection > 0){
//             colorOpacity = 1.1*entry.intersectionRatio
//             document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, ${colorOpacity}), rgba(107, 166, 210, ${colorOpacity})), url(/images/main-background.webp)` ;
//             console.log('increasing')
//         }
//         if(entry.isIntersecting && scrollDirection < 0){
//             document.body.style.backgroundImage = `linear-gradient(to right, rgba(107, 166, 210, 1), rgba(107, 166, 210, 1))`;
//             console.log('decreasing')
//         }
//         previousRatio = entry.intersectionRatio;
//         console.log(previousRatio)
//     })
// },{threshold:colorTransitionThresholds})

// colorTransitionObersver.observe(aboutUs)
