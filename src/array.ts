import { countries } from './countries';
import { webTechs } from './web_techs';

// 3. Arrays
// Exercise: Level 1

//Declare an empty array;
// const emptyArr: string[] = [];

//Declare an array with more than 5 number of elements
const numberArr: number[] = [1, 2, 3, 4, 5, 6];

//Find the length of your array
console.log('length of arr:', numberArr.length);

//Get the first item, the middle item and the last item of the array
console.log('firt item:', numberArr[0]);
console.log('middle item:', numberArr[Math.round(numberArr.length / 2)]);
console.log('last item:', numberArr[numberArr.length - 1]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 2, 3, 'bon', { a: 5 }];
console.log('length of mix Arr:', mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

//Print the array using console.log()
console.log('arr IT company:', itCompanies);

//Print the number of companies in the array
console.log('length of companys arr:', itCompanies.length);

//Print the first company, middle and last company
console.log('first company:', itCompanies[0]);
console.log('middle company:', itCompanies[Math.round(itCompanies.length / 2)]);
console.log('last company:', itCompanies[itCompanies.length - 1]);

//Print out each companys
itCompanies.forEach((item) => {
  console.log(item);
});

//Change each company name to uppercase one by one and print them out
itCompanies.forEach((item) => {
  console.log(item.toUpperCase());
});

// TODO: fixed
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
let str = '';
itCompanies.reduce((p, c, currIndex) => {
  if (p !== '') {
    return (str = `${p}${
      currIndex === itCompanies.length - 1
        ? ` and ${c} are big IT companies`
        : `, ${c}`
    }`);
  }
  return c;
}, str);
console.log(str);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index0 = itCompanies.indexOf('Facebook');
if (index0 != -1) {
  console.log(`This ${itCompanies[index0]} exist in the array`);
} else {
  console.log(`a company is not found`);
}

//Filter out companies which have more than one 'o' without the filter method
let arr2o: string[] = [];
itCompanies.forEach((item) => {
  const arrItem = item.split('');
  let count = 0;
  arrItem.forEach((ele) => {
    if (ele === 'o') {
      count++;
    }
  });
  if (count === 2) {
    arr2o.push(item);
  }
});
console.log('Array have more than one "o":', arr2o);

//Sort the array using sort() method
console.log(webTechs.sort());

//Reverse the array using reverse() method
console.log(webTechs.reverse());

//Slice out the first 3 companies from the array
console.log(countries.slice(3, countries.length));

//Slice out the last 3 companies from the array
console.log(countries.slice(0, countries.length - 3));

//Slice out the middle IT company or companies from the array
console.log(
  itCompanies
    .slice(0, Math.round(itCompanies.length / 2) - 1)
    .concat(
      itCompanies.slice(Math.round(itCompanies.length / 2), itCompanies.length)
    )
);

//Remove the first IT company from the
itCompanies.splice(0, 1);
console.log(itCompanies);

// TODO: need fix
//Remove the middle IT company or companies from the array
  itCompanies.length % 2 === 0
    ? itCompanies.splice(Math.round(itCompanies.length / 2) - 1, 2)
    : itCompanies.splice(Math.round(itCompanies.length / 2) - 1, 1);
console.log('removeMiddle:', itCompanies);

//Remove the last IT company from the array
itCompanies.splice(itCompanies.length - 1, 1);
console.log(itCompanies);

//Remove all IT companies
itCompanies.splice(0);
console.log(itCompanies);

// Exercise: Level 2

//Create a separate countries.js , web_techs.js
console.log(countries);
console.log(webTechs);

//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
console.log(text.replace(regex, '').split(' '));
console.log(text.replace(regex, '').split(' ').length);

//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
let checkExists = shoppingCart.includes('Meat');
if (checkExists) {
  console.log('This food exist in the array');
} else {
  shoppingCart.unshift('Meat');
}
console.log('addBegging:', shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
let checkExists1 = shoppingCart.includes('Sugar');
if (checkExists1) {
  console.log('This food exist in the array');
} else {
  shoppingCart.push('Sugar');
}
console.log('addLast:', shoppingCart);

// remove 'Honey' if you are allergic to honey
let index2 = shoppingCart.indexOf('Honey');
if (index2 != -1) {
  shoppingCart.splice(index2);
} else {
  console.log('This fruit does not exist in the array');
}
console.log('CartBeforeRemove:', shoppingCart);

//modify Tea to 'Green Tea'
let index3 = shoppingCart.indexOf('Tea');
if (index3 != -1) {
  shoppingCart[index3] = 'Green Tea';
} else {
  console.log('This fruit does not exist in the array');
}
console.log('CartModify:', shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
  console.log(countries);
}

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise: Level 3

//The following is an array of 10 students ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(Math.max(...ages));
console.log(Math.min(...ages));
const average = ages.reduce((p, c) => p + c, 0) / ages.length;
console.log('avg:', average);

//Slice the first ten countries from the
console.log(countries.slice(0, 10));

//Find the middle country(ies) in the
console.log(countries[Math.round(countries.length / 2) - 1]);

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half

if (countries.length % 2 === 0) {
  const firstCountries = countries.slice(0, countries.length / 2);
  console.log('firstCountries:', firstCountries);
  const lastCountries = countries.slice(countries.length / 2, countries.length);
  console.log('lastCountries:', lastCountries);
}
if (countries.length / 2 !== 0) {
  countries.unshift('VietNam');
  const firstCountries = countries.slice(0, countries.length / 2);
  console.log('firstCountries:', firstCountries);
  const lastCountries = countries.slice(countries.length / 2, countries.length);
  console.log('lastCountries:', lastCountries);
}
