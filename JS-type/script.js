let foo = 42;
foo = 'bar';
foo = true;
console.log(typeof foo);

const name = "han";
const age = 30;
const hasJob = true;
const car = null;
let anything;
const sym = Symbol();

console.log(typeof name);

//Array 배열
const hobbies = ['walking','books'];
//Object 객체
const address = {
    province : '경기도',
    city : '성남시'
};

console.log(typeof hobbies);
console.log(Array.isArray(address));