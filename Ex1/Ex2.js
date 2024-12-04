// פונקציה שבודקת אם מספר הוא ראשוני
function isPrime(num) {
  if (num <= 1) return false; // מספרים קטנים או שווים ל-1 לא ראשוניים
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // אם יש מחלק אחר חוץ מ-1 ו-עצמו, הוא לא ראשוני
    }
  }
  return true; // אם לא מצאנו מחלקים, אז המספר ראשוני
}

// לולאה שמדפיסה את כל המספרים הראשוניים הקטנים מ-237
for (let i = 2; i < 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
