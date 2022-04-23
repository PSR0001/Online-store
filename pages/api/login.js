import User from '../../models/User'
import connectDB from '../../middleware/mongoose'

const handler = async (req, res) => {
    if (req.method === 'POST') {

        let user = await User.findOne({ "email": req.body.email })
        // console.log(user);
        if (user) {
            if(req.body.email == user.email && req.body.password == user.password){

                res.status(200).json({ success: true, email:user.email , password: user.password })
            }
            else{
                res.status(400).json({ success: false , error:"invailed credentials"})

            }
        }
        
        else{
            res.status(400).json({success:false, error: "User Not Found" })

        }

    } else {

        res.status(400).json({ error: "Invailed" })
    }
}
// let Products = await Product.find()



export default connectDB(handler)
