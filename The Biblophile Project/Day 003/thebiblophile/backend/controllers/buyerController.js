import Buyer from '../models/buyerModel'

const createBuyer = async (req,res) =>{
    const {name,email,password} = req.body
    const buyer = new Buyer({
        name: name,
        email: email,
        password: password
    })
    if(buyer){
        const createdBuyer = await buyer.save()
        res.status (201).json({buyer: {
            name: createdBuyer.name,
            email: createdBuyer.email,
            _id : createdBuyer._id
        }})
    } else{
        res.status(500).json("Buyer is not created.")
    }
}

const loginBuyer = async(req, res)=>{
    const {email, password} = req.body
    const existingBuyer = await Buyer.find({email: email})
    if(existingBuyer && (await existingBuyer.matchPassword(password))){
        res.status(200).json({buyer: {
            name: existingBuyer.name,
            email: existingBuyer.email,
            _id : existingBuyer._id
        }})
    } else{
        res.status(500).json('Buyer not found ')
    }
}

export{
    createBuyer,
    loginBuyer
}