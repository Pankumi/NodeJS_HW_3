const {Shema, model} = require("mongoose");

const contactShema = new Shema({
    name: String,
    email: String,
    phone: String,
});

// model - іменник в 1, з великої літери оскільки це клас 
// 1й аргумент назва колекції в однині 2й арг. схема
const Contact = model("contact", contactShema);

module.exports = Contact;
