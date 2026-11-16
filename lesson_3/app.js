// Data types - типы данных

// 1. строки string
// 2. числа number
// 3. undefined
// 4. null
// 5. boolean
// 6. object
// -
// 7. BigInt
// 8. Symbol

const studentName = "Amanov Aman";
const studentStats = {
  hw: 75,
  visits: 8,
  tests: 87,
};

const hwCompleted = studentStats.hw >= 40;
const visitsCompleted = studentStats.visits >= 4;
const testsCompleted = studentStats.tests >= 50;

// conditions - условия

if (hwCompleted) {
  //   console.log("Вы набрали " + studentStats.hw + " из 80");
  console.log(`Вы набрали ${studentStats.hw} из 80`); // template strings
  console.log("✅ Баллов за ДЗ хватает для бесплатного повтора");
} else {
  console.log("❌ Баллов за ДЗ НЕ ХВАТАЕТ для бесплатного повтора");
  //   console.error("Вам не хватило: " + (40 - studentStats.hw) + " баллов");
  console.error(`Вам не хватило: ${40 - studentStats.hw} баллов`);
}

if (visitsCompleted) {
  console.log("✅ Посещений хватает для бесплатного повтора");
} else {
  console.log("❌ Посещений НЕ ХВАТАЕТ для бесплатного повтора");
}

if (testsCompleted)
  console.log("✅ Баллов за КР хватает для бесплатного повтора");
else console.log("❌ Баллов за КР НЕ ХВАТАЕТ для бесплатного повтора");

if (hwCompleted && visitsCompleted && testsCompleted) {
  console.log("Можно на бесплатный повтор 🥳🥳🥳");
} else {
  console.warn("К сожалению, повтор платный");
}

const totalAmount = 17000;
let bonuses = 0;
const bonusCard = '';

if(!bonusCard) {
    console.warn("Бонусная карта не предоставлена")
}

if (bonusCard) {
  if (totalAmount >= 800 && totalAmount <= 1999) {
    bonuses = Math.floor(totalAmount / 100);
  } else if (totalAmount >= 2000 && totalAmount <= 4999) {
    bonuses = Math.floor(totalAmount / 100) * 2;
  } else if (totalAmount >= 5000) {
    bonuses = Math.floor(totalAmount / 100) * 3;
  }
}

console.log(
  `За покупку на ${totalAmount} сом вы получили ${bonuses ?? 0} баллов`,
);

// Falsy - false, 0, NaN, "", null, undefined
