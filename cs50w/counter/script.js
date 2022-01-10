// create var counter in a local storage
if (!localStorage.getItem('counter')){
  localStorage.setItem('counter', 0);
}

// Count Function
function count() {
  let counter = localStorage.getItem('counter');
  counter++;
  document.querySelector('h1').innerHTML = counter;
  localStorage.setItem('counter', counter);
}


// Reset Function
function reset() {
  document.querySelector('h1').innerHTML = 0  ;
  localStorage.setItem('counter', 0);
}

// Event Listeners for Count & Reset buttons
// the first line here says, even before loading the eventListeners for the functions, set the
// counter value to what's inside the localStorage.
document.querySelector('h1').innerHTML = localStorage.getItem('counter');
document.querySelector('#count').onclick = count;
document.querySelector('#reset').onclick = reset;



// Start auto increment
document.querySelector('#auto').onclick = () => {
  if (document.querySelector('#auto').innerHTML === 'Stop Auto'){
    clearInterval(interval);
    document.querySelector('#auto').innerHTML = 'Start Auto';
  } else {
    interval = setInterval(count, 1000);
    document.querySelector('#auto').innerHTML = 'Stop Auto';
  }
}


// Event Listeners for backgroundColor
document.querySelector('#light').onclick = function(){
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  }

document.querySelector('#dark').onclick = function(){
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  }
