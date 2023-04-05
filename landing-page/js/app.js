/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); // 4 <section> element in html file
const navBar = document.querySelectorAll('navbar__list');// <unordered list> element located in <nav> element located in <header> element
const navLi = document.querySelectorAll('navbar__menu ul li');

/**
 * End Global Variables
 * Start Helper Functions
*/

// This function will create the nav__links
const createNavLinks = (listItem) => {
	return `<a class="menu__link" href="#${listItem.id}">${listItem.dataset.nav}</a>`;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// This will build the nav
const ul = document.getElementById('navbar__list');
sections.forEach((section) => {
	const li = document.createElement('li');
	li.innerHTML = createNavLinks(section);
	ul.appendChild(li);
});

// Add class 'active' to section when near top of viewport

const active = document.getElementsByClassName("your-active-class"); // class label in <section> element

// Checks if each section is within the viewport parameters

const viewPort = document.querySelectorAll('section');
window.addEventListener('scroll', function () {
	sections.forEach(function (section) {
		const bounds = section.getBoundingClientRect();
		const isInViewport = bounds.top >= 0
			&& bounds.left > 09
			&& bounds.right <= window.innerWidth
			&& bounds.bottom <= window.innerHeight;
		//this applies active state on current section
		if (isInViewport) {
			section.classList.add('.your-active-class');

			activeNavLinks.forEach(function(link) {
				const sectionId = "#" + section.id;
				if (sectionId === link.getAttribute("href"));
			})
					link.classList.add('.active__navlink');
			} else {
				section.classList.remove('.your-active-class');
			
			}
		}
	)

}
// Scroll to anchor ID using scrollTO event
const myLinks = document.querySelectorAll('navbar__list');
const allSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
	let current = '';

	allSections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
	})
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

const menu = document.querySelector('.navbar__menu');

// Scroll to section on link click

menu.addEventListener('click', () => {
	menu.classList.toggle("open");
	document.getElementById(block).scrollIntoView({ behavior: "smooth" })
});

// Set sections as active
