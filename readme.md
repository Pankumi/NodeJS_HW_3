## GoIT Node.js Course Template Homework

Виконайте форк цього репозиторію для виконання домашніх завдань (2-6)
Форк створить репозиторій на вашому http://github.com

Додайте ментора до колаборації

Для кожної домашньої роботи створюйте свою гілку.

- hw02
- hw03
- hw04
- hw05
- hw06

Кожна нова гілка для др повинна робитися з master

Після того, як ви закінчили виконувати домашнє завдання у своїй гілці, необхідно зробити пулл-реквест (PR). Потім додати ментора для рев'ю коду. Тільки після того, як ментор заапрувить PR, ви можете виконати мердж гілки з домашнім завданням у майстер.

Уважно читайте коментарі ментора. Виправте зауваження та зробіть коміт у гілці з домашнім завданням. Зміни підтягнуться у PR автоматично після того, як ви відправите коміт з виправленнями на github
Після виправлення знову додайте ментора на рев'ю коду.

- При здачі домашньої роботи є посилання на PR
- JS-код чистий та зрозумілий, для форматування використовується Prettier

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

***
Відео:
ФСОН 56+57. Модуль 2. Урок 2
    0:58 - декоратори
FSON 56+57. Модуль 3. Урок 1
    0:4 - відмінність між БД
    / реляційні - рілейшен - пов'язані
    0:14 - налаштування MongoDB
        1. створ. проект
        2. створ. юзера -> Database Access -> add -> login, parol, built-in role // user:UserAdmin parol:w1GHF7mieQsHdcDd
        3. дозволені IP -> Network access -> add -> ALLOW ACCESS FROM ANYWHERE
        4. створити кластер БД -> database -> build a database // Кластер - група БД з обраним тарифним планом // collection:Cluster0
        5. створити БД -> collections -> add // database name:books_reader collection name:books
        //бд books_reader складається з колекцій. Колекція - масив об'єктів

        for MongoDB Driver:
        mongodb+srv://UserAdmin:<PASSWORD>@cluster0.jyznjjc.mongodb.net/<DATA_BASE>?retryWrites=true&w=majority/
        mongodb+srv://UserAdmin:w1GHF7mieQsHdcDd@cluster0.jyznjjc.mongodb.net/books_reader?retryWrites=true&w=majority/
        DB_HOST=mongodb+srv://UserAdmin:w1GHF7mieQsHdcDd@cluster0.jyznjjc.mongodb.net/books_reader?retryWrites=true&w=majority/
        DB_HOST=mongodb+srv://NodeJsLogin:KeMMzECD1uNqAvC6@nodejscluster.e4sl6l7.mongodb.net/contacts_db?retryWrites=true&w=majority

        MongoDB user-NodeJsLogin parol-KeMMzECD1uNqAvC6
    0:28 - mongodb compass (як підключитись)
    0:54 - MongoDB driver / mongoose
    1:03 - підключаємося до mongoDB за  допомогою mongoose
    .env - зберігає змінні оточення ключ=значення Щоб вони підтяглись в систему використовується додаток dotenv 
    1:47 - .env.example - зберігає змінні оточення, лише ключі. Девопсами, які розміщають проект на сервері, створюю відповідні змінні оточення, пізніше розробник додає їх значення.
FSON 56+57. Модуль 3. Урок 2
    0:5 - підключаємось до БД Mongo DB через Mongo DB Compas 
    0:6 - як працюють БД
    0:8 - як Mongoose працює з Mongo DB
        1. - створ схема (опис об'єкту який буде зберігатись) (Приклад - схема продукції)
        2. - створ модель (клас с готовими методами для звернення до БД, щоб знайти, додати, видалити, оновити...) (Приклад - кладівник)
        2. - модель зв'язується з колекцією (Приклад - склад)
    0:16 - як ще працює
    0:30 - присвоїти полю значення за замовчанням - додати в схему {default: meaning,}
    0:32 - вказати зн. з певного переліку - додати в схему {enum: ["m1", "m2", "m3",]}
    0:33 - перевірка за регулярними виразами  - додати в схему {match: /^\d{3}-\d{3}-\d{2}-\d{2}$/ }

    
