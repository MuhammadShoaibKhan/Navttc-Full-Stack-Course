const User = require('../models/userModel.js')


const createUser = async(req, res)=>{
    const {name, email, age} = req.body 
    const user = new User({
        name: name,
        email: email,
        age:age
    })
    console.log(user)
    try {
        const createdUser = await user.save() 
        res.status(201).json({user: createdUser})
    } catch (err) {
        res.status(500).json('User is not Created')
    }  
}

const getUsers = async(req, res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users) 
    } catch (err) {
        res.status(500).json('Users not found')
    }
}
const editUser = async(req, res)=>{
    const id = req.params.id
    const user = await User.findById({_id:id})
    const {name, email, age} = req.body 
    if(user){
        try { 
         user.name = name || user.name
         user.email = email || user.email
        user.age = age || user.age
        const updatedUser = await user.save()
        res.status(200).json({user: updatedUser}) 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'User not found'})
    }
}

const deleteUser = async(req, res)=>{
    const id = req.params.id
    const user = await User.findById({_id:id})
    if(user){
        try {  
        await User.deleteOne({_id:id})
        res.status(200).json('User is Deleted') 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'User not found'})
    }
}

exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.editUser = editUser
exports.createUser = createUser