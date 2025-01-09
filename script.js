
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

document.addEventListener("DOMContentLoaded", () => {
    const announcementButton = document.querySelector('.announcement-button button');
    const announcementSection = document.querySelector('.announcement-section');
    const closeButton = document.querySelector('.close-button');
    const viewAllNotifications = document.querySelector('.announcement-footer p');
    const currentAnnouncementsContainer = document.querySelector("#announcement-items");

    let announcements = [];
    let currentIndices = [0]; // Use [0] for "No New Announcements".

    // Fetch announcements from JSON
    fetch("announcements.json")
        .then(response => response.json())
        .then(data => {
            announcements = data;
            displayCurrentAnnouncements(); // Initially show current announcements
        })
        .catch(error => console.error("Error fetching announcements:", error));

    // Function to display current announcements
    function displayCurrentAnnouncements() {
        currentAnnouncementsContainer.innerHTML = ""; // Clear previous entries

        if (currentIndices.length === 0 || currentIndices.includes(0)) {
            currentAnnouncementsContainer.innerHTML = `
                <div class="announcement-item">
                    <div class="announcement-right">
                        <p class="announcement-title">No New Announcements</p>
                    </div>
                </div>
            `;
            return;
        }

        currentIndices.forEach(index => {
            const announcement = announcements.find(item => item.index === index);
            if (announcement) {
                const announcementHTML = createAnnouncementHTML(announcement);
                currentAnnouncementsContainer.innerHTML += announcementHTML;
            }
        });
    }

    // Function to display all announcements
    function displayAllAnnouncements() {
        currentAnnouncementsContainer.innerHTML = ""; // Clear previous entries

        announcements.forEach(announcement => {
            const announcementHTML = createAnnouncementHTML(announcement);
            currentAnnouncementsContainer.innerHTML += announcementHTML;
        });
    }

    // Utility function to create announcement HTML
    function createAnnouncementHTML({ date, title, description }) {
        return `
            <div class="announcement-item">
                <div class="announcement-left">
                    <p>${date}</p>
                </div>
                <div class="vertical-line"></div>
                <div class="announcement-right">
                    <p class="announcement-title">${title}</p>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }

    // Function to toggle announcement section visibility
    const toggleAnnouncementSection = () => {
        if (!announcementSection.classList.contains("visible")) {
            // When opening, reset to current announcements
            displayCurrentAnnouncements();
        }
        announcementSection.classList.toggle("visible");
    };

    // Event listeners
    announcementButton.addEventListener("click", toggleAnnouncementSection);
    closeButton.addEventListener("click", () => {
        announcementSection.classList.remove("visible");
    });
    viewAllNotifications.addEventListener("click", () => {
        displayAllAnnouncements();
    });
});







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
