// Exercise: Web page content update

// capture user input
let answer = prompt('What is your name?');

// output the typed-in information on the screen, as an <h1> HTML element
// doing it this way is not the most efficient approach, especially in more complex scenarios
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

// HTML forms
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);
/**
    The next thing that you need to do is: set up an event listener.
    The event you're listening for is the change event. In this case,
    the change event will fire after you've typed into the input and 
    pressed the ENTER key.
*/
input.addEventListener('change', function() {
    console.log(input.value)
    h1.innerText = input.value; // update the text content of the h1 element with the value you got from the input field.
})