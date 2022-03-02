'use strict' //untuk menjalankan hanya pada file ini

const express = require("express")
const memberController = require('../controllers/member_ctrl')
const router = new express.Router();

router.get("/getAll", memberController.getAll)
router.get("/getId/:id", memberController.getId)
router.post("/add", memberController.add)
router.put("/update/:id", memberController.update)
router.delete("/delete/:id", memberController.delete)

module.exports  = router