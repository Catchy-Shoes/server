const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Customer = require('./Customer')
const app = express()

const dbURI = 'mongodb+srv://Catchy:WmBxQnXsXsoU7NaU@catchy.m5vn3lo.mongodb.net/catchydb?retryWrites=true&w=majority'

mongoose.connect(dbURI,{
    useNewUrlParser:true, 
    useUnifiedTopology:true

})
.then(() => console.log(`Db Connected`))
.catch(() => console.log(`DB connection failed`))


app.use(express.json())
app.use(cors())

// app.get("/customers",(req,res)=>{

//     Customer.find({},(err,data)=>{
//         if(err){
//             return res.status(501).send({err:err})
//         }

//         return res.status(200).send({data:data})
//     })

// })

app.purchase('/api/purchaseProduct', function (req, res, next) {
    console.log("In Purchase")
  var post = new Post({
    category: req.body.category,
    brand: req.body.body,
    qty: req.body.qty,
    price: req.body.price,
    sizes: req.body.sizes,
    shippingType: req.body.shippingType,
    seller: req.body.seller,
  })
  post.save(function (err, post) {
    if (err) { 
    return next(err) 
}
    res.json(201, post)
  })
})

const port = process.env.PORT || 8001
app.listen(port,()=>[
    console.log(`Server started port at ${port}`)
])
