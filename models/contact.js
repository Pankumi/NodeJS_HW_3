const mongoose = require("mongoose");
const Joi = require("joi"); // перевіряє тіло POST запиту на наявність всіх необхідних полів і їх типи

const { handleMongooseError } = require("../helpers/index");

const nameList = ["m1", "m2", "m3"];
const dateRegexp = /^\d{2}-\d{3}-\d{3}-\d{4}$/;
// -----------

// Створення схеми
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String, // тип поля
      required: true, // обов'язкове поле
      enum: nameList, // вказати зн. з певного переліку
    },
    email: {
      type: String,
      required: true,
      default: "my@gmsil.com", // зн. поля за замовчанням
    },
    phone: {
      type: String,
      required: true,
      match: dateRegexp, // перевірка за регулярним виразом
    },
  }, // перший аргумент у схемі описує об'єкт
  {
    versionKey: false, // прибираєм "__v": 0
    timestamps: true, // додаєм "createdAt":{"$date":"2023-05-18T13:34:42.384Z"},"updatedAt": {"$date": "2023-05-18T13:34:42.384Z"}
  } // другий аргумент - список налаштувань
);

// Мідлвара для c[tvb!]
contactSchema.post("save", handleMongooseError); // коли при спробі збереження станеться помилка спрацює ця мідлвара

// Створення моделі на основі схеми // метод mongoose.model створює клас "Contact" який прив'язується до цієї колекції і всередині якого валідація відбувається за цією схемою
const Contact = mongoose.model("contacts_collectoin", contactSchema); // Contact - іменник у формі однини, з великої літери, оскільки це клас // 1-й аргумент - ім'я моделі вказується в однині "contact" і має відповідати імені колекції в БД в множині "contacts". 2-й аргумент - схема

// -----------

// шаблон полів в body запиту.
const addSchema = Joi.object({
  name: Joi.string()
    .valid(...nameList)
    .required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(dateRegexp).required(),
}); // string() - тип, required() - обов'язкове

const updateNameSchema = Joi.object({
  name: Joi.string()
    .valid(...nameList)
    .required(),
});
const schemas = {
  addSchema,
  updateNameSchema,
};

// -----------

module.exports = {
  Contact,
  schemas,
};
