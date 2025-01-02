
// .............loader script

// addEventListener('DOMContentLoaded',() => {

//     setTimeout(() => {
//         hideLoader();
//         showBody();
//     }, 2000)

//     function hideLoader(){
//         const loader = document.querySelector('.loader');
//         loader.style.display = "none";
//     }
//     function showBody(){
//         document.body.style.display = "block";    }
// })






// ...................Side Slide Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // else{
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//......................Hamburger js



const menuBtn = document.querySelector('.hamburger');
const menuContent = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');
});



// ...........Events Animation Js

const eventImage = document.querySelectorAll('.event-image');
const eventText = document.querySelectorAll('.event-text');

eventImage.forEach((el) => {
    el.addEventListener('click', (e) =>{
        console.log(e);
        el.style.opacity = "0";
        console.log(el);
        const targText = el.nextElementSibling;  
        console.log(targText);
        targText.style.opacity = "1";
        targText.style.zIndex  = "100";
    });
});
eventText.forEach((el) => {
    el.addEventListener('click', (e) =>{
        console.log(e);
        console.log(el);
        el.style.opacity = "0";
        el.style.zIndex  = "-1";
        const targImage = el.previousElementSibling; 
        targImage.style.opacity = "1";
    });
});

// 'View All Notifications' button
// Select elements
const announcementButton = document.querySelector('.announcement-button button');
const announcementSection = document.querySelector('.announcement-section');
const closeButton = document.querySelector('.close-button');
const viewAllNotifications = document.querySelector('.announcement-footer p');
const announcementContainer = document.querySelector('.announcement-container');

// Store the initial hardcoded announcements
const initialAnnouncements = Array.from(document.querySelectorAll('.announcement-item'))
    .filter(item => !item.classList.contains('announcement-footer'))
    .map(item => item.outerHTML);

// State to track whether announcements are loaded
let announcementsLoaded = false;

// Function to toggle announcement section visibility
const toggleAnnouncementSection = () => {
    announcementSection.classList.toggle('visible');
};

// Function to close the announcement section and reset to original format
const closeAnnouncementSection = () => {
    announcementSection.classList.remove('visible');
    resetToOriginalAnnouncements();
};

// Function to reset announcements to the original state
const resetToOriginalAnnouncements = () => {
    // Clear all existing announcement items except the footer
    const existingItems = announcementContainer.querySelectorAll('.announcement-item');
    existingItems.forEach(item => item.remove());

    // Add back all initial hardcoded announcements
    initialAnnouncements.forEach(htmlString => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlString;
        const announcementItem = tempDiv.firstChild;
        announcementContainer.insertBefore(announcementItem, announcementContainer.querySelector('.announcement-footer'));
    });

    // Reset the loaded state
    announcementsLoaded = false;
};

// Function to fetch and display announcements
// Remove 'time' from the fetched announcements
const fetchAnnouncements = async () => {
    if (announcementsLoaded) return; // Avoid duplicate loading

    try {
        const response = await fetch('announcements.json');
        if (!response.ok) throw new Error('Failed to fetch announcements');

        const announcements = await response.json();

        // Clear existing announcements
        const existingItems = announcementContainer.querySelectorAll('.announcement-item');
        existingItems.forEach(item => item.remove());

        // Add announcements from JSON (without time)
        announcements.forEach(announcement => {
            const announcementItem = document.createElement('div');
            announcementItem.className = 'announcement-item';

            const leftDiv = document.createElement('div');
            leftDiv.className = 'announcement-left';
            leftDiv.innerHTML = `<p>${announcement.date}</p>`; // Only include date

            const verticalLine = document.createElement('div');
            verticalLine.className = 'vertical-line';

            const rightDiv = document.createElement('div');
            rightDiv.className = 'announcement-right';
            rightDiv.innerHTML = `<p class="announcement-title">${announcement.title}</p>
                                  <p>${announcement.description}</p>`;

            announcementItem.appendChild(leftDiv);
            announcementItem.appendChild(verticalLine);
            announcementItem.appendChild(rightDiv);

            announcementContainer.insertBefore(announcementItem, announcementContainer.querySelector('.announcement-footer'));
        });

        announcementsLoaded = true;
    } catch (error) {
        console.error('Error loading announcements:', error);
    }
};

// Event listeners
announcementButton.addEventListener('click', toggleAnnouncementSection);
closeButton.addEventListener('click', closeAnnouncementSection);
viewAllNotifications.addEventListener('click', fetchAnnouncements);


// Event listeners
announcementButton.addEventListener('click', toggleAnnouncementSection);
closeButton.addEventListener('click', closeAnnouncementSection);
viewAllNotifications.addEventListener('click', fetchAnnouncements);


// Event listeners
announcementButton.addEventListener('click', toggleAnnouncementSection);
closeButton.addEventListener('click', closeAnnouncementSection);
viewAllNotifications.addEventListener('click', fetchAnnouncements);


// ......Implementations Scroll JS


// const rightScroll = document.querySelector('.rightScroll');
// const leftScroll = document.querySelector('.leftScroll');

// const slides = document.querySelectorAll('.impBox');

// rightScroll.addEventListener('click', () => {
//     let count = 0;
//     slides.forEach((slide) => {
//         if(isInViewport(slide) && count === 0){
//             console.log(slide.nextElementSibling);
//             slide.nextElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block:"center"});
//             count += 1;
//             console.log(`Count : ${count}`);
//         }
//     })
// })
// leftScroll.addEventListener('click', () => {
//     let count = 0;
//         slides.forEach((slide) => {
//         if(isInViewport(slide) && count === 0){
//             console.log(slide.previousElementSibling);
//             slide.previousElementSibling.scrollIntoView({behavior: "smooth", inline:"center", block: 'center'});
//             count += 1;
//             console.log(`Count : ${count}`);
//         }
//     })
// })

// console.log(window.innerWidth)
// console.log(document.documentElement.clientWidth)

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.left >= 0 &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }



// ........Scale on Scroll Animations


// const thresholds = [];

// for(let i=0; i<=1; i+=0.01)
// {
//     thresholds.push(i);
// }

// const ScaleElements = function ScaleElement(entries){
//     entries.forEach((element) => {
//         if(element.isIntersecting){
//             element.target.style.transform = `translateX(${350*(1-element.intersectionRatio)*(1-element.intersectionRatio)*(1-element.intersectionRatio)}px)`;
//         }
//     });
// };

// const ScaleObserver = new IntersectionObserver(ScaleElements, {threshold: thresholds})

// const AllElements = document.querySelectorAll('.right-flow-animate');

// AllElements.forEach((element) => {
//     ScaleObserver.observe(element);
// })
