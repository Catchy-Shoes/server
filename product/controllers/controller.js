const product = require('../models/product')


 getProducts = async (req,res)=>{

    product.find()
    .then(data =>{
        return res.status(200).send({data:data})
    })
    .catch(err =>{
        return res.status(401).send({err:err})
    })

    try{
        const data = await product.find()
        return res.status(200).send({data:data})
    }
    catch(error){
        return res.status(500).send({error:error})
    }
    
},

addProduct = async function (req, res) {
        if (
          !req.body.category ||
          !req.body.brand ||
          !req.body.gender ||
          !req.body.price ||
          !req.body.qty ||
          !req.body.color || 
          !req.body.seller ||
          !req.body.sizes || 
          !req.body.shippingType ||
          !req.body.seller

        ) {
          res.json({ success: false, msg: "Enter all fields" });
        } else {
          var newProduct = product({
            category: req.body.category,
            brand: req.body.brand,
            gender: req.body.gender,
            price: req.body.price,
            qty: req.body.qty,
            color: req.body.color,
            sizes: req.body.sizes,
            shippingType: req.body.shippingType,
            seller: req.body.seller,
            
          });
          newProduct.save(function (err, newProduct) {
            if (err) {
              res.json({ success: false, msg: "Failed to save" });
            } else {
              res.json({ success: true, msg: "Successfully saved" });
            }
          });
        }
      },



    deleteProduct = async function (req, res) {
            try {           
                const id = req.params.id;
    
                  const products = await product.findByIdAndDelete(id);
                  if (!products) {
                    throw createError(404, 'Product does not exist');
                  }
                  res.send(products);
                } catch (err) {
                  res.send("Error" + err);
                }
              },



module.exports = {
    functions
}