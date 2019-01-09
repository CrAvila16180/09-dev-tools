const dogs = [{name: 'Snickers', age:2}, { name:'Hugo', age:8}];

let makeGreen = () => {
    const p = document.querySelector('p');
    p.style.color = '#BADA55' ;
    p.style.fontSize = '50px';
};

// Regular
console.log('Regular')
console.log("Hello");
console.log('');

// Interpolated
console.log('Interpolated')
console.log("Hello I'm a %s string!", "shitty")
console.log('')

// Styled 
console.log('Styled')
console.log('%c I am some great text', 'font-size: 25px; text-shadow: 3px 3px 3px gray')
console.log('')

// Warning!
console.log('Warning!');
console.warn('OH NOO');
console.log('');

// Error :|
console.log('Error :|');
console.error('Oh shit!')
console.log('');

// Info 
console.log('Info');
console.info('Crocodiles eat 3-4 people per year.');
console.log('');

// Testing 
const p = document.querySelector('p');
console.log('Testing');
console.assert(p.classList.contains('ouch'), 'That is wrong!')
console.log('');

// Clearing 
console.log('Clearing');
console.log('console.clear();')
console.log('');

// Viewing DOM Elements
console.log('Viewing DOM Elements');
console.log(p);
console.dir(p);
console.log(''); 

// Grouping Together 
console.log('Grouping together');
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`)
})
console.log('');

// Counting 
console.log('Counting');
console.groupCollapsed('Counting');
console.count('Carlos');
console.count('Carlos');
console.count('Carlos');
console.count('Carlos');
console.groupEnd('Counting');
console.log('');

// Timing 
console.log('Timing');
console.time('Fetching Data');
fetch('https://api.github.com/users/cravila')
     .then(data => data.json())
     .then(data => {
         console.timeEnd('Fetching Data');
         console.log(data);
     });
console.log('');

// Tables
console.log('Tables');
console.table(dogs);
console.log('');

