const express = require('express')

const router = express.Router()
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController');
const authMiddelware = require('../middlewares/authMiddelware');



//router.post('/create-inventory', authMiddelware, createinventoryController);
router.post("/create-inventory", authMiddelware, createInventoryController);

//GET ALL BLOOD RECORD
router.get("/get-inventory", authMiddelware, getInventoryController)
module.exports = router;