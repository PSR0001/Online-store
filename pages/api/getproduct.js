import Product from '../../models/Products'
import connectDB from '../../middleware/mongoose'
// import Products from '../../models/Products'

const handler = async(req, res)=> {
    let Products = await Product.find()
    let tshart={}
    for (let item of Products){
      if (item.userId in tshart) {
        if(!tshart[item.userId].color.includes[item.color] && item.availableQty >0){
          tshart[item.userId].color.push(item.color)
        }
        if(!tshart[item.userId].size.includes[item.size] && item.availableQty >0){
          tshart[item.userId].size.push(item.size)
        }
      }
      else{
        tshart[item.userId]=JSON.parse(JSON.stringify(item))
        if (item.availableQty >0) {
          tshart[item.userId].color = [item.color]
          tshart[item.userId].size = [item.size]
        }
      }


    //rest  
    }
    res.status(200).json({ tshart })
  }


export default connectDB(handler)
  