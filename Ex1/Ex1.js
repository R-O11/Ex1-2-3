// Razi + Ahmad

const num = 30;

// בדיקה אם המספר מתחלק ב-2, 3 או 5
const divisibleBy2 = num % 2 === 0;
const divisibleBy3 = num % 3 === 0;
const divisibleBy5 = num % 5 === 0;

// מחשבים את מספר המחלקים
const count =
  Number(divisibleBy2) + Number(divisibleBy3) + Number(divisibleBy5);

// מדפיסים את התוצאה בהתאם
console.log(count);
