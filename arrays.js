const arr=[64,'iam',true,console.log()];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);//also work for string
console.log('\n\n\n');

const movies =['300','mi','deadpool','inception','inception','3 idiots',];

//indexing
console.log(movies[3]);
console.log(movies.indexOf('mi'));
console.log(movies.at(-2));
movies[2]='mi and wolverine';
console.log(movies);

//slicing     
console.log(movies.slice(2,4));//also work for string
console.log(movies.slice(2));
console.log(movies.slice(-2));
console.log(movies.slice(-4,-2));
console.log(movies);

console.log(movies[2].slice(-9));

//adding and removing
movies.push('kanchana');// add element from the end
console.log(movies);
movies.unshift('gangs of wasseypur')//add element from the start
console.log(movies);
console.log(movies.pop());//remove element from the end
console.log(movies.shift());//remove element from the start
console.log(movies);
// movies.splice(3,2); remove 2 element starting from index

movies.splice(3,2,'john wick','the boys','invincible');
console.log(movies);
