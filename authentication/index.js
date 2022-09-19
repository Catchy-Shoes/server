const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Authentication = require('./Authentication')
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

app.get("/customers",(req,res)=>{

    Customer.find({},(err,data)=>{
        if(err){
            return res.status(501).send({err:err})
        }

        return res.status(200).send({data:data})
    })

})

const port = process.env.PORT || 8002
app.listen(port,()=>[
    console.log(`Server started port at ${port}`)
])