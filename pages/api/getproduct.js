import Product from '../../models/Products'
import connectDB from '../../middleware/mongoose'
// import Products from '../../models/Products'

const handler = async(req, res)=> {
    let Products = await Product.find()
    let tshirt={}
    for (let item of Products){
      if (item.userId in tshirt) {
        if(!tshart[item.userId].color.includes[item.color] && item.availableQty >0){

        }
      }
      else{
        tshart[item.userId]=JSON.parse(JSON.stringify(item))
        if (item.availableQty >0) {
          tshart[item.userId].color = [item.color]
          tshart[item.userId].size = [item.size]
        }
      }



    }
    res.status(200).json({ Products })
  }


export default connectDB(handler)
  