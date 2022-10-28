const express = require('express')
const router = express.Router()


//GET
const {getProducts} = require('../controllers/controller')
router.get("/products",getProducts)

const {login} = require('../controllers/controller')
router.post("/login",login)

//POST
const {addProduct} = require('../controllers/controller')
router.post("/addProduct",addProduct)


const {deleteProduct} = require('../controllers/controller')
router.post("/deleteProduct",deleteProduct)

const {purchaseProduct} = require('../controllers/controller')
router.post("/purchaseProduct",purchaseProduct)

const {purchaseProduct} = require('../controllers/controller')
router.get("/purchaseProduct",purchaseProduct)


const {signup} = require('../controllers/controller')
router.post("/signup",signup)



module.exports = router