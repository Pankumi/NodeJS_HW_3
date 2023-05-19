const express = require("express");

const ctrl = require("../../controllers/contacts");
const {validateBody, isValidId} = require("../../middlewares")
const {schemas} = require("../../models/contact");

const router = express.Router();

// -----------

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

// router.post("/", ctrl.add);
router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById); // put - запит змінює об'єкт (шляхом повного перезапису масиву)

// router.delete("/:id", isValidId, ctrl.deletedById);

// -----------

module.exports = router;
