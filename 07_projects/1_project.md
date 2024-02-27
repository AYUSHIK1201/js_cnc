# Project related to DOM

## Project link
[CLICK HERE](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## Project1- colour change

``` javascript
console.log('ayushi')

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach(function (button) {//button is class in html page
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
   if (e.target.id === 'grey') //grey is id in html page
    {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```

##Project 2-BMI calcultor

``` javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  //.value gives the value of height
  ////parseInt convert value into integer
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height))
   {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) 
  {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else
   {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //tofixed give result till 2 decimal places
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;//give result
  }
});

```

Project 3- Digital clock

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString()); 
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);  //updat time every 1 sec

```


