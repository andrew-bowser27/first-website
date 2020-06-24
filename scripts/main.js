/* this is getting my feet wet with JS and its intended to demonstrate to me what the
potential is with the language! Have fun! */
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/leader-feature.jpg') {
        myImage.setAttribute ('src', 'images/courageous.jpg');
    } else {
        myImage.setAttribute ('src', 'images/leader-feature.jpg')
    }
}

let myButton = document.querySelector('button');

// this is an 'onclick' even handler
myButton.onclick = function() {
    setUserName();
}
let myHeading = document.querySelector('h1');

// Notice that the function is going to be named 'setUserName()'
// 1. setUserName() function has a prompt() function which displays a dialog box similar to alert(), and user enters name
// 2. user's name is stored to a variable called 'myName'
// 3. the code calls on an API localStorage which stores data in the browser and retrieve it later!
// 4. localStorage's setItem() function creates/stores a data item called 'name', setting its value to 'myName' variable
// 5. we set the textContent of the heading to a string plus the user's newly stored name.
// I just added a condition to make sure the user enters something, not just blank
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {    
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You can do this, ' + myName + '!';
    }
}

// This is called initialization code as it structures the app when it first loads
// 1. using the negation operator (logical NOT) checks whether the 'name' data exists
// 2. If not, the setUserName() function runs to create it
// 3. If it does exist (the user set their name on a previous visit) we retrieve the stored name using getItem() and set the textContent
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back, ' + storedName + '! You can do this!';
}