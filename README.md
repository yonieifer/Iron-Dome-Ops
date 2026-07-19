Iron Dome Ops
שרת Node.js, Express, MySQL

מבנה:
routes: כתובות API
controllers: קבלת בקשה והחזרת תשובה
services: לוגיקה עסקית
repositories: שאילתות ל-DB

Endpoints:

מפעילים:
POST /operators - יצירת מפעיל
GET /operators - רשימת מפעילים

אירועים:
POST /incidents - יצירת אירוע
PATCH /incidents/:id/status - עדכון סטטוס
GET /incidents/open - אירועים בסטטוס OPEN

הרצה:
docker compose up -d
npm install
node app.js