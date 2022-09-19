const product = require('../models/product')


const getProducts = async (req,res)=>{

    // product.find()
    // .then(data =>{
    //     return res.status(200).send({data:data})
    // })
    // .catch(err =>{
    //     return res.status(401).send({err:err})
    // })

    try{
        const data = await product.find()
        return res.status(200).send({data:data})
    }
    catch(error){
        return res.status(500).send({error:error})
    }
    
}

module.exports = {
    getProducts
}