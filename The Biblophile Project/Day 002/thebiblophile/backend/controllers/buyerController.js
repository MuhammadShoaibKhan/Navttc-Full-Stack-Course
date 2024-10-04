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
        res.status(500).json("Book is not created.")
    }
}
export{
    createBuyer
}