const mongoose = require('mongoose');

// Створення схеми
const contactSchema = new mongoose.Schema({
  name: {
    type: String, // тип поля
    required: true, // обов'язкове поле
    enum: ["m1", "m2", "m3",], // вказати зн. з певного переліку
  },
  email: {
    type: String,
    required: true,
    default: "my@gmsil.com", // зн. поля за замовчанням
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{2}-\d{3}-\d{3}-\d{4}$/, // перевірка за регулярним виразом
  },
});

// Створення моделі на основі схеми // метод mongoose.model створює клас "Contact" який прив'язується до цієї колекції і всередині якого валідація відбувається за цією схемою
const Contact = mongoose.model('contacts_collectoin', contactSchema); // Contact - іменник у формі однини, з великої літери, оскільки це клас // 1-й аргумент - ім'я моделі вказується в однині "contact" і має відповідати імені колекції в БД в множині "contacts". 2-й аргумент - схема

module.exports = Contact;