const express = require("express");
const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

// router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

// router.put("/:id", ctrl.updateById); // put - запит змінює об'єкт (шляхом повного перезапису масиву)

// router.delete("/:id", ctrl.deletedById);

module.exports = router;
