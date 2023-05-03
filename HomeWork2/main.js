//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let elements =['table', 4, 'car', 78, false, 3.14, 'Pi', true, 'hello', 'Andrii']
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2]);
console.log(elements[3]);
console.log(elements[4]);
console.log(elements[5]);
console.log(elements[6]);
console.log(elements[7]);
console.log(elements[8]);
console.log(elements[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let booksAladdin = {
    title: "Aladdin",
    pageCount: 250,
    genre: "Fantasy",
}
let booksPirate = {
    title: "Pirates of the Caribbean",
    pageCount: 450,
    genre: "Adventures",
}
let booksHP = {
    title: "Harry Potter",
    pageCount: 205,
    genre: "Fantasy",
}
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let books_Aladdin = {
    title: "Aladdin",
    pageCount: 250,
    genre: "Fantasy",
    authors: [
        { name: 'Antoine Gallant', age: 64,}
    ]
    // authors: ['Antoine Gallant', 64],
}
let books_pirate = {
    title: "Pirates of the Caribbean",
    pageCount: 450,
    genre: "Fantasy",
    authors: [
        { name: 'Liz Braswell', age: 24,}
    ]
    // authors: ['Liz Braswell', 24],
}
let books_HP = {
    title: "Harry Potter",
    pageCount: 205,
    genre: "Fantasy",
    authors: [
        { name: 'J. K. Rowling', age: 48,}
    ]
    // authors: ['J. K. Rowling', 48],
}
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let usersArray = [
    {
        name: 'Andrii',
        username: 'kiko',
        password: 'qwerty'
    },
    {
        name: 'Olga',
        username: 'Lola',
        password: '123456'
    },
    {
        name: 'Micha',
        username: 'Muha',
        password: 'adidas'
    },
    {
        name: 'Vasya',
        username: 'Biba',
        password: 'bibs0'
    },
    {
        name: 'Ivan',
        username: 'Van_s',
        password: 'vasb4'
    },
    {
        name: 'Micha',
        username: 'Mqww',
        password: 'v784'
    },
    {
        name: 'Andrew',
        username: 'andre',
        password: 'v784'
    },
    {
        name: 'Micha',
        username: 'Muha',
        password: '5a78a'
    },
    {
        name: 'Alex',
        username: 'Ax',
        password: '5a78a'
    },
    {
        name: 'Vitalik',
        username: 'Vitya',
        password: 'qwer_78$'
    }
]
console.log(usersArray[0]["password"]);
console.log(usersArray[1]["password"]);
console.log(usersArray[2]["password"]);
console.log(usersArray[3]["password"]);
console.log(usersArray[4]["password"]);
console.log(usersArray[5]["password"]);
console.log(usersArray[6]["password"]);
console.log(usersArray[7]["password"]);
console.log(usersArray[8]["password"]);
console.log(usersArray[9]["password"]);
////////////////////////////////////////////////////////////////////////////////////////////////////
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if(x !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 58;
if (time <= 15){
    console.log('Перша чверть');
} else if (time > 15 && time <= 30){
    console.log('Друга чверть');
}else if (time > 30 && time <= 45){
    console.log('Третя чверть');
}else if (time > 45 && time <= 59) {
    console.log('Четверта чверть');
}else{
    console.log('Спробуй ще разок');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25;
if (day <= 10){
    console.log('Перша декада місяця');
} else if (day > 10 && day <= 20) {
    console.log('Друга декада місяця');
}else if (day > 20 && day <= 31){
    console.log('Третя декада місяця');
}else{
    console.log('Спробуй ще разок');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = 5;
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Спробуй ще разок)');
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = +prompt("Введіть перше число для порівняння");
let b = +prompt("Введіть друге число для порівняння");
if(a > b){
    console.log(a);
    alert(a);
}else if(b === a){
    console.log("Числа рівні");
    alert("Числа рівні");
}else {
    console.log(b);
    alert(b);
}
//////////////////////////////////////////////////////////
let x;

//////////////////////////////////////////////////////
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let JavaScript = coursesAndDurationArray[0];
if (JavaScript.monthDuration > 5){
    console.log("Супер");
}
let Java = coursesAndDurationArray[1];
if (Java.monthDuration > 5){
    console.log("Супер");
}
let Python = coursesAndDurationArray[2];
if (Python.monthDuration > 5){
    console.log("Супер");
}
let QAComplex = coursesAndDurationArray[3];
if (QAComplex.monthDuration > 5){
    console.log("Супер");
}
let FullStack = coursesAndDurationArray[4];
if (FullStack.monthDuration > 5){
    console.log("Супер");
}
let Frontend = coursesAndDurationArray[5];
if (Frontend.monthDuration > 5){
    console.log("Супер");
}