const Joi = require("joi"); // перевіряє тіло POST запиту на наявність всіх необхідних полів і їх типи


const changeSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});

module.exports = {
  changeSchema,
};
