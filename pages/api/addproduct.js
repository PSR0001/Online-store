import Product from '../../models/Products'
import connectDB from '../../middleware/mongoose'

const handler = async(req, res)=> {
    if (req.method === 'POST') {
        // Process a POST request
        // console.log(req.body)
        for(let i=0;i<req.body.length;i++){
            let p = new Product({
                userId:req.body[i].userId,
                slug:req.body[i].slug,
                desc:req.body[i].desc,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                prise:req.body[i].prise,
                availableQty:req.body[i].availableQty
            })

            await p.save()
        }
        res.status(200).json({ success:"success" })

      } else {
        
        res.status(400).json({ error:"Invailed" })
      }
    }
    // let Products = await Product.find()
  


export default connectDB(handler)
  