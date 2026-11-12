// Data types - типы данных

// 1. строки string
// 2. числа number
// 3. undefined
// 4. null
// 5. boolean
// 6. object
// -
// 7. BigInt
// 8. Symb

const cinemaTitle = "Пираты Карибского моря";
const cinemaDirector = "John Snow";
const cinemaGenre = "Adventure, Travelling, Comedy, Lovestory";

const cinemaDurationMinutes = 196; // in minutes
const ticketPrice = 900; // in soms
const premierYear = 2003;
const ageLimit = 16;
const rating = 4.78;
const cinemaBudget = 20_000_000;
const cashProfit = null;

const premierDate = "1 dec 2026";

// boolean - true (1) false (0)

const isActive = true; // true - в прокате, false - нет
const isSuccess = cashProfit > cinemaBudget;

// операторы сравнения: > < >= <= == === != !==
// операторы для Number: + - * / **
// операторы для String: + (конкатенация concatenation)

// const cinemaActors

console.log(cinemaTitle);
console.log(cinemaDirector);
console.log("Success", isSuccess);
console.log(typeof rating); // number
console.log(typeof 0); // number

const userName = "Evgeniy";
const userSurname = "Kiselev";
const userPatronymic = "Dmitrievich";

const mbankName = userName + " " + userSurname[0] + ".";
console.log("Mbank name:", mbankName);

const optimaName = userSurname[0] + ". " + userName[0] + ". " + userPatronymic[0] + ".";
console.log("Optima name:", optimaName);

// Kis*** Evg*** Dmi***
const demirName = userSurname.slice(0, 3) + "*** " 
+ userName.slice(0, 3) + "*** " 
+ userPatronymic.slice(0, 3) + "***"
console.log("Demir name:", demirName);

console.log(userName[100]); // undefined

let emptyVar; // undefined
let emptyVar2 = null;

const carSell = {
    title: "ПРОДАЮ!! СРОЧНА!! МЭРС 200КА",
    model: "Mersedes Benz e220",
    volume: "2.5 L",
    fuelType: "Бензин",
    priceUsd: 10_000,
    priceKgs: 900_000,
    distance: 400_000,
    year: 2004,
    isActual: true,
    isVIP: true,
    gear: null,
    handle: null
};

console.log("Before:", carSell)

delete carSell.priceKgs;   // remove
carSell.priceCny = 150_000; // add
carSell.priceUsd = 12_000; // edit

console.log("Car price in $ ", carSell.priceUsd);
console.log("Car price in soms ", carSell["priceKgs"]);
console.log("Car price in yans ", carSell.priceCny);
console.log("After", carSell);





