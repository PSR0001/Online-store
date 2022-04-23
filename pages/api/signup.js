import User from '../../models/User'
import connectDB from '../../middleware/mongoose'

const handler = async(req, res)=> {
    if (req.method === 'POST') {
        // Process a POST request
        // console.log(req.body)
       let U = new User(req.body)
      await U.save()
        res.status(200).json({ success:"success" })

      } else {
        
        res.status(400).json({ error:"Invailed" })
      }
    }
    // let Products = await Product.find()
  


export default connectDB(handler)
  