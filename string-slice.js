const anthem = 'Amar Sonar Bngla Ami Valobasi'
const words = anthem.split(' ')
const withoutA = anthem.split('a');

// kato thake kato dorkar slice  'sonar' 
const smallslice = anthem.slice(5,10);

// substr
const anotherPart = anthem.substr(11,7);
console.log(anotherPart);


console.log(smallslice);
console.log(words);
console.log(withoutA);