'use strict' //untuk menjalankan hanya pada file ini

const express = require("express")
const paketController = require('../controllers/paket_ctrl')
const router = new express.Router();

router.get("/getAll", paketController.getAll)
router.get("/getId/:id", paketController.getId)
router.post("/add", paketController.add)
router.put("/update/:id", paketController.update)
router.delete("/delete/:id", paketController.delete)

module.exports  = router