const btn = document.getElementById('menu-btn');
//menu-btn is our hamburger button
const overlay = document.getElementById('overlay'); //Referring to the id=overlay I created on the html file
const menu = document.getElementById('mobile-menu');  //This line is for the main menu when clicking hamburger
const counters = document.querySelectorAll('.counter');  //For the stat counter
let scrollStarted = false;


btn.addEventListener('click', navToggle);
//Previous line just means that there will be a functionality that will make that button(hamburger) clickable
//That's why it's addEventListener
//navToggle just means it's switchable(function)

document.addEventListener('scroll', scrollPage) //So I can see the animation once I reach the animation section
//Later on, the scrollPage function goes alongside this line of code


function navToggle() {
    //These 3 lines are classes = open, overlay-show, stop-scrolling
    btn.classList.toggle('open');   //This class is so the hamburger button opens and closes from 3 lines to an X
    overlay.classList.toggle('overlay-show');   //It helps the transition of the hamburger(id=overlay)
    document.body.classList.toggle('stop-scrolling');  //This class is so when clicking hamburger you stop scrolling
    menu.classList.toggle('show-menu');   //It toggles! Meaning the mobile menu the hamburger offers will give the switching effect. It goes alongside line 4

}

//This function is so I can have the counting animation 3,7,4 not as soon as I refresh but as soon as I get to 
//the counting section
function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {       //This part is so I have an exact part when the animation starts
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) { //This alone will create problem resetting each time I scroll. Create scrollStarted at the top
        reset();
        scrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter)  => {
        counter.innerText = '0';
       // console.log(counter);

       const updateCounter = () => {    //This is a function to grab the number data of the counter

        const target = +counter.getAttribute('data-target');

        //Getting the counter value
        const c = +counter.innerText;

        //Create an increment because it needs to count up
        const increment = target / 100;

        // If counter is less than the target, add increment
        if (c < target) {

            //Round up and set counter value
            //It takes whatever the 'c' value is and then it gets rounded up
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 75);//Every 75 milliseconds. It will keep reloading until it matches the target 3, 7, 4

            } else {
                counter.innerText = target;
            }

        };

        updateCounter();

    });
}


//This will make it so that each time I get out of the animation will reset and then when 
//I come back animation starts again
function reset() {
    counters.forEach((counter) => (counter.innerHTML = 
    '0'));
}









