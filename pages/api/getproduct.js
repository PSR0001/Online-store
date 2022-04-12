import Product from '../../models/Products'
import connectDB from '../../middleware/mongoose'
// import Products from '../../models/Products'

const handler = async(req, res)=> {
    let Products = await Product.find()
    res.status(200).json({ Products })
  }


export default connectDB(handler)
  