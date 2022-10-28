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


app.post('/api/login', function (req, res) {
  if((!req.body.username) || (!req.body.password)){
            res.json({success: false, msg: 'Please enter all the details'})
        }
        else{
            var newUser = user({
                fullName: req.body.username,
                password: req.body.password,
            });
            newUser.save(function(err, newUser){
                if(err){
                    res.json({success:false , msg:'Failed to save'})
                }
                else{
                    res. json({success: true, msg: 'Successfully Registered'})
                }
            })
        }
})

app.post('/api/signup', function (req, res) {

  user.findOne({
            username: req.body.username,
        }, function(err,user){
            if(err) throw err
            if(!user){
                res.json({success:false, msg: 'User not registered!'})  
            }
            else{
                user.comparePassword(req.body.password, function(err,isMatch){
                    if(isMatch && !err){
                        var token = jwt.encode(user, config.secret)
                        res.json({success:true, token: token})  
                    }
                    else{
                        res.json({success:false, msg: 'Incorrect Details!'})  
                    }
                })
            }
        })
})

const port = process.env.PORT || 8002
app.listen(port,()=>[
    console.log(`Server started port at ${port}`)
])