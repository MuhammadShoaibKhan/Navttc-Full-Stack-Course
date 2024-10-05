import Buyer from '../models/sellerModel'

const createSeller = async (req,res) =>{
    const {name,email,password} = req.body
    const seller = new Seller({
        name: name,
        email: email,
        password: password
    })
    if(seller){
        const createdSeller = await seller.save()
        res.status (201).json({seller: {
            name: createdSeller.name,
            email: createdSeller.email,
            _id : createdSeller._id
        }})
    } else{
        res.status(500).json("Seller is not created.")
    }
}

const loginSeller = async(req, res)=>{
    const {email, password} = req.body
    const existingBuyer = await Buyer.find({email: email})
    if(existingSeller && (await existingSeller.matchPassword(password))){
        res.status(200).json({seller: {
            name: existingSeller.name,
            email: existingSeller.email,
            _id : existingSeller._id
        }})
    } else{
        res.status(500).json('Seller not found ')
    }
}

export{
    createSeller,
    loginSeller
}