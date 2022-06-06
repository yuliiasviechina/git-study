function getAnimalFromHoroscopeByYear (birthYear) {
    const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];
    const indexOfAnimal = birthYear % 12;
    return animals[indexOfAnimal];
}
// console.log(getAnimalFromHoroscopeByYear(1995));

function speadViolateLimit (distance) {
    const timeForDistance = 0.5;
    const speedLimit = 45;
    return (distance * timeForDistance) > speedLimit;
}
// console.log(speadViolateLimit(20));

function needToPay(costs){
    if (costs < 100) {
        return costs * 0.95;
    }

    if (costs > 100 && costs < 200) {
        return costs * 0.9;
    }

    if (costs > 200){
        return costs * 0.85;
    }
}
// console.log(needToPay(699));


// типы данных
let array = ['1', '2', '3'];
let string = 'string';
let boolean = true;

const object = {
    name: 'Ruslan',
    age: 27,
    sex: 'm'
}


// loop
const arr = ['Ruslan', 'Yuliia', 'Sobaka'];
for (let i = 0; i < arr.length; i = i + 1) {
    //console.log(arr[i]);
}
