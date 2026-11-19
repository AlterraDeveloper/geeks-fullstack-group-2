// Arrays - массивы

const bankOps = [+50_000, +20_000, -7000, -500, -3000, -8000, +2500];

bankOps.push(-5000, +700, +700, +700, +700, +700);
bankOps.unshift(+5000, -1000);

console.log("Количество операций за ноябрь:", bankOps.length);
console.log("Тип данных массива:", typeof bankOps);
console.log("Первая операция за ноябрь:", bankOps[0]);
console.log("Последняя операция за ноябрь:", bankOps[bankOps.length - 1]);

// console.log("Последняя операция за ноябрь:", bankOps[15]);
// console.log("Последняя операция за ноябрь:", bankOps[15] || "не создана");
// console.log("Последняя операция за ноябрь:", bankOps[15] ?? "не создана");

// console.log("Тип данных null:", typeof null);

// Loops - циклы
let myBalance = 0;

// for..of
for (const amount of bankOps) {
  myBalance += amount;
}

// console.log("Amount = ", amount);

console.log("Остаток на конец месяца:", myBalance);

let incomes = 0;
let expenses = 0;

for (const amount of bankOps) {
  //   if (amount > 0) {
  //     incomes += amount;
  //   } else {
  //     expenses += amount;
  //   }

  if (amount > 0) {
    incomes += amount;
  }

  if (amount < 0) {
    expenses += amount;
  }
}

console.log("Итого доходов:", incomes);
console.log("Итого расходов:", Math.abs(expenses));

const children = [
  2015, 2020, 2011, 2023, 2025, 2024, 2021, 2018, 2019, 2014, 2015, 2016, 2014,
];

let gifts = 0;

const currentYear = new Date().getFullYear();

for (const year of children) {
  const age = currentYear - year;

  if (age >= 6 && age <= 12) {
    console.log(`ПОДАРОК! Год - ${year}, возраст - ${age}`);
    gifts++;
  }
}

console.log(`${gifts} детей из ${children.length} получат подарки`);

const date = {
  year: 2026,
  month: 11,
  day: 19,
  hour: 21,
  minute: 5,
};

const realBankOps = [
  {
    date: "01-11-2026 09:53:03+06",
    amount: 50_000,
    comment: "ЗП за октябрь",
    id: "d8we9078we9-vhue-7869-wehuiwehfu",
  },
  {
    date: "01-11-2026 09:53:03+06",
    amount: 50_000,
    comment: "ЗП за октябрь",
    id: "d8we9078we9-vhue-7869-wehuiwehfu",
  },
  {
    date: "01-11-2026 09:53:03+06",
    amount: 50_000,
    comment: "ЗП за октябрь",
    id: "d8we9078we9-vhue-7869-wehuiwehfu",
  },
  {
    date: "01-11-2026 09:53:03+06",
    amount: 50_000,
    comment: "ЗП за октябрь",
    id: "d8we9078we9-vhue-7869-wehuiwehfu",
  },
  {
    date: "01-11-2026 09:53:03+06",
    amount: 50_000,
    comment: "ЗП за октябрь",
    id: "d8we9078we9-vhue-7869-wehuiwehfu",
  },
];
