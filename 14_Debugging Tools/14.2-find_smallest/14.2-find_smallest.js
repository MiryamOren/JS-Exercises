function findSmallest(a, b, c) {
  if (c < a && c < b) {
    return c;
  }
  if (a < b && a < c) {
    return a;
  }
  return b;
}
findSmallest(52, 66, 2);

// 1. First find the line that contains the problem. Write it down.
// line 10

// 2. Which debug method did you use to find the bug?
// the errors at console

// 3. Explain the bug in your own words.
// קוראים לפונקציה שלא קיימת (יש שגיאת כתיב בשם של הפונקציה)
// בנוסף, הפונקציה לא עושה את מה שהיא צריכה לעשות, משתמשת באופרטורים בצורה שגויה, ולא בודקת את התנאים הנכונים (שיניתי לחלוטין את התנאים)
// 4. Fix the code and submit it all.
