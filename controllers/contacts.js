const {Contact} = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");
const { changeSchema } = require("../schemas");

const getAll = async (req, res) => {
  const result = await Contact.find()
  // console.log("result >>", result);
  res.status(200).json(result);
};

// 1-знаходжу об'єкт з зазначеним id, 2-повертаю
const getById = async (req, res) => {
  const {id} = req.params
  // 1
  // const result = await Contact.findOne({ _id: id }); //  повертається null якщо не знайдено
  const result = await Contact.findById( id ); // .findById() для пошуку за id повертається null якщо не знайдено
  if (result === null) {
    throw HttpError(404, "Not found");
  }
  // 2
  res.json(result);
};

// 1-додаю нов. об'єкт до масиву, 2-повертаю нов. об'ект
const add = async (req, res) => {
  // 1
  const result = await Contact.create(req.body);
  // 2
  res.status(201).json(result);  
};

// 1-змінюю данні, 2-повертаю оновлений контакт
const updateById = async (req, res) => {
  const {id} = req.params
  // 1
  const result = await Contact.findByIdAndUpdate(id, req.body, {new: true}); // повертається null якщо id не знайдений
  if (result === null) {
    throw HttpError(404, "Not found");
  }
  // 3
  res.status(200).json(result);
};

// // 1-видаляю об'єкт з зазначеним id, 2-повертаю повідомлення
// const deletedById = async (req, res) => {
//   // 1
//   const result = await removeContact(req.params.id); // info: removeContact повертається null якщо id не знайдений
//   if (result === null) {
//     throw HttpError(404, "not found");
//   }
//   // 2
//   // res.status(204); // статус 204 відправляється без тіла тому і вказувати його не потрібно.
//   res.status(200).json({ message: "contact deleted" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  // deletedById: ctrlWrapper(deletedById),
};
