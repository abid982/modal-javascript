'use strict';

// const showModalBtn = document.querySelector('#btn--show-modal');
// const modalElement = document.querySelector('.modal');
// const overlayElement = document.querySelector('.overlay');
// const closeBtn = document.querySelector('.close-modal');

// // Test
// console.log(showModalBtn);
// console.log(modalElement);
// console.log(overlayElement);

// // Add event listener to button

// // Function run
// showModalBtn.addEventListener('click', function () {
//     // console.log('Testing....');

//     modalElement.style.display = 'block';
//     overlayElement.style.display = 'block';
// });

// // Add event listener to close button
// closeBtn.addEventListener('click', function () {
//     // Close Modal
//     document.querySelector('.modal').style.display = 'none';

//     // Close Overlay
//     document.querySelector('.overlay').style.display = 'none';
// });

// overlayElement.addEventListener('click', function () {
//     // Close Modal
//     document.querySelector('.modal').style.display = 'none';

//     // Close Overlay
//     document.querySelector('.overlay').style.display = 'none';
// });

// Final Class
const showModalBtn = document.querySelector('#btn--show-modal');
const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

// Test
console.log(showModalBtn);
console.log(modalElement);
console.log(overlayElement);

// Add event listener to button

// Function run
showModalBtn.addEventListener('click', function () {
    // console.log('Testing....');

    modalElement.style.display = 'block';
    overlayElement.style.display = 'block';
});

// Add event listener to close button
closeBtn.addEventListener('click', function () {
    // Close Modal
    document.querySelector('.modal').style.display = 'none';

    // Close Overlay
    document.querySelector('.overlay').style.display = 'none';
});

overlayElement.addEventListener('click', function () {
    // Close Modal
    document.querySelector('.modal').style.display = 'none';

    // Close Overlay
    document.querySelector('.overlay').style.display = 'none';
});

// Keyboard Events
// keydown
// keypress
// keyup

// const event = {
//     key: 'k',
//     code: 'KeyK',
//     type: 'keydown',
// };

// console.log(event.key);
// console.log(event.code);

document.addEventListener('keydown', function (event) {
    // IF WE PRESS ESC KEY THEN RUN FOLLOWING LINES OF CODE

    // Event Object
    // console.log(event);
    // console.log(event.key); // g, h, Escape
    // console.log('Key was pressed!');

    // If Escape is pressed
    if (event.key == 'Escape') {
        // console.log('You have pressed escape key!');
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';

    }
});

document.addEventListener('keyup', function (event) {
    console.log('keyup');
    console.log(event);
});
