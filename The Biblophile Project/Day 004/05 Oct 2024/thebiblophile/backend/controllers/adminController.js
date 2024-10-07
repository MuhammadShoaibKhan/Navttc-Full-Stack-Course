import Buyer from '../models/adminModel'

const createAdmin = async (req,res) =>{
    const {name,email,password} = req.body
    const admin = new Admin({
        name: name,
        email: email,
        password: password
    })
    if(admin){
        const createdAdmin = await admin.save()
        res.status (201).json({admin: {
            name: createdAdmin.name,
            email: createdAdmin.email,
            _id : createdAdmin._id
        }})
    } else{
        res.status(500).json("Admin is not created.")
    }
}

const loginAdmin = async(req, res)=>{
    const {email, password} = req.body
    const existingAdmin = await Admin.find({email: email})
    if(existingAdmin && (await existingAdmin.matchPassword(password))){
        res.status(200).json({admin: {
            name: existingAdmin.name,
            email: existingAdmin.email,
            _id : existingAdmin._id
        }})
    } else{
        res.status(500).json('Admin not found ')
    }
}

export{
    createAdmin,
    loginAdmin
}