
let mainEl = document.querySelector('main');
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = '#4a4e4d'

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// mainEl.textContent = 'DOM Manipulation'
mainEl.innerHTML = 'DOM Manipulation'

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');

// Part 2:


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// Part 3:
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

//   Iterate over the entire menuLinks array and for each "link" object:
    menuLinks.forEach(link => {
    // Create an <a> element
    const linkElement = document.createElement('a');

    // Set the href attribute with its value set to the href property of the link object
    linkElement.setAttribute('href', link.href);

    // Set the content of the <a> element to the value of the text property of the link object
    linkElement.textContent = link.text;

    // Append the new <a> element to the topMenuEl element
    topMenuEl.appendChild(linkElement);
});



