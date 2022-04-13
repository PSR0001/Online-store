import Product from '../../models/Products'
import connectDB from '../../middleware/mongoose'

const handler = async(req, res)=> {
    if (req.method === 'POST') {
        // Process a POST request
        // console.log(req.body)
        for(let i=0;i<req.body.length;i++){
            let p = await Product.findOneAndUpdate(req.body[i]._id,req.body[i])
            await p.save()
        }
        res.status(200).json({ success:"success" })

      } else {
        
        res.status(400).json({ error:"Invailed" })
      }
    }
    // let Products = await Product.find()
  


export default connectDB(handler)
  