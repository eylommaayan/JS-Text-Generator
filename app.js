// מאגר פסקאות מקצועיות על עולם ה-JavaScript
const text = [
  `JavaScript היא שפת תכנות דינמית ורבת-עוצמה המעניקה חיים ואינטראקטיביות לאתרי אינטרנט. בעוד ש-HTML אחראי על מבנה הדף ו-CSS על העיצוב והסגנון, JavaScript מספקת את הלוגיקה, מעבדת נתונים ומגיבה לפעולות המשתמש בזמן אמת.`,
  `מודל ה-DOM (Document Object Model) הוא ממשק תכנות המייצג את מסמך ה-HTML כמבנה עץ של צמתים (Nodes). בעזרת פקודות כמו querySelector, addEventListener ו-classList, שפת JavaScript מאפשרת לשנות אלמנטים, לעדכן סגנונות ולהוסיף תוכן דינמי מבלי לרענן את הדף.`,
  `החל מגרסת ECMAScript 6 (ES6), השפה עברה מהפכה משמעותית עם תוספות תחביריות מתקדמות: פונקציות חץ (Arrow Functions), פירוק מבנים (Destructuring), תבניות מחרוזת (Template Literals) ומילות המפתח המודרניות let ו-const שהחליפו את השימוש ב-var המסורתי.`,
  `פעולות אסינכרוניות ב-JavaScript מנוהלות ביעילות בעזרת מנגנון ה-Event Loop. באמצעות מנגנוני הבטחות (Promises) ותחביר async/await, ניתן לבצע קריאות רשת מול שרתים חיצוניים (כמו בשימוש ב-Fetch API) בצורה חלקה ומבלי להקפיא את ממשק המשתמש בדפדפן.`,
  `כיום, JavaScript כבר אינה מוגבלת לדפדפני אינטרנט בלבד. בזכות סביבת ההרצה Node.js, מפתחים משתמשים באותה השפה בדיוק כדי לבנות צד-שרת (Backend), לנהל בסיסי נתונים, לתקשר עם פרוטוקולי תקשורת ולפתח ממשקי API מהירים ומאובטחים.`,
  `מתודות מתקדמות לעבודה על מערכים כמו map, filter ו-reduce מציעות גישה פונקציונלית ונקייה לעיבוד נתונים. הן מייתרות את הצורך בלולאות for ארוכות, משפרות את קריאות הקוד ומאפשרות שרשור פעולות ישירות על מידע מורכב.`,
  `מושגי ה-Scope וה-Closures הם מאבני היסוד החשובות ביותר להבנת השפה. Closure נוצר כאשר לפונקציה פנימית נשמרת גישה למשתנים מתוך מרחב הראייה של הפונקציה החיצונית שלה, גם לאחר שהפונקציה החיצונית כבר סיימה את פעולתה.`,
  `ספריות וסביבות עבודה מודרניות כמו React, Vue ו-Angular נשענות כולן על היסודות של JavaScript. הן מאפשרות לפתח יישומי עמוד-יחיד (Single Page Applications) עשירים, מודולריים ומבוססי רכיבים הניתנים לשימוש חוזר.`,
  `שפת TypeScript, שפותחה על גבי JavaScript, מוסיפה לשפה מערכת טיפוסים סטטית (Static Typing). היא מסייעת לאתר שגיאות בשלב הכתיבה עוד לפני הרצת הקוד, ומספקת חוויית פיתוח מתקדמת במיוחד בפרויקטים רחבי היקף.`
];

// בחירת האלמנטים מתוך ה-DOM
const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

// האזנה לשליחת הטופס והפקת הפסקאות המבוקשות
form.addEventListener("submit", function (e) {
  // מניעת רענון ברירת המחדל של הדף
  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  // אם לא הוזן מספר תקין או שהמספר מחוץ לטווח, תוצג פסקה אחת אקראית
  if (isNaN(value) || value <= 0 || value > text.length) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    // חיתוך מספר הפסקאות המבוקש והצגתן בתוך תגיות p
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});