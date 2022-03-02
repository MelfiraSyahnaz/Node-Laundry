'use strict' //untuk menjalankan hanya pada file ini

const express = require("express")
const outletController = require('../controllers/outlet_ctrl')
const router = new express.Router();

router.get("/getAll", outletController.getAll)
router.get("/getId/:id", outletController.getId)
router.post("/add", outletController.add)
router.put("/update/:id", outletController.update)
router.delete("/delete/:id", outletController.delete)

module.exports  = router