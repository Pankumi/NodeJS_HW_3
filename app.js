const express = require("express");
const logger = require("morgan"); // журналізатор, що використовується для реєстрації подій, повідомлень та інших важливих даних під час виконання програми
const cors = require("cors"); // допомагає управляти політикою same-origin у браузері і дозволяє перетинати доменні обмеження, які існують при здійсненні запитів між різними доменами.
require("dotenv").config(); // імпортуємо dotenv і одразу запускаємо його метод config() який читає .env і додає змінні оточення в систему

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short"; // при запуску додатка через "start:dev" команда в скрипті запуску в "package.json" записує "development" в змінну "env", тож тепер перевіряєм це, якщо правда то зберігаєм "dev" і нищє використовуємо для логування

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json()); // перевіряє чи є в запиті body в форматі application/json якщо так то ця мідлвара за допомогою json.parse перетворить строку на об'єкт

app.use("/api/contacts", contactsRouter); // всі запити які починаються з /api/contacts шукати в contactsRouter

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json(err.message);
  }
  console.log(err);
  res.status(500).json({ message: "Server error" });
});

module.exports = app;
