
const mongoose = require("mongoose");

const app = require("./app");

// const {DB_HOST} = require("./config");
const {DB_HOST} = process.env;  // process.env - ЗМІННІ ОТОЧЕННЯ, глобальний об'єкт в якому записані налашування комп'ютера на якому виконується код

mongoose.set('strictQuery', true); // За замовчуванням false - будь-які запити до бази даних, які включають поля, не описані в моделі Mongoose, будуть проігноровані без повідомлення про помилку. true - будуть відхилятись з помилкою, що може допомогти забезпечити правильність виконання запитів до бази даних та уникнути помилок через неправильну структуру запиту.

mongoose.connect(DB_HOST)
.then( ()=>{
  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000");
  });
} )
.catch( error => {
  console.log(error);
  process.exit(1); // process.exit() - закриває запущєні процеси 1 - закрити з невідомою помилкою.
})