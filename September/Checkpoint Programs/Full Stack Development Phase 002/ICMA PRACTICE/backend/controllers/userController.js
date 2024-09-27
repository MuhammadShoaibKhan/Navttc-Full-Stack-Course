const { find } = require('../models/userModel.js')
const User = require('../models/userModel.js')
const {generateToken} = require('../utils/generateToken.js')

const createUser = async(req, res)=>{
    const {name, email, password} = req.body 
    const user = new User({
        name: name,
        email: email,
        password:password
    })
    console.log(user)
    if(user) {
        const createdUser = await user.save() 
        generateToken(res, createdUser._id)
        res.status(201).json({user: {
            name: createdUser.name,
        email: createdUser.email,
        _id:createdUser._id
        }})
    } else{
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
    const {name, email, password} = req.body 
    if(user){
        try { 
         user.name = name || user.name
         user.email = email || user.email
        user.password = password || user.password
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

const loginUser = async(req,res) =>{
    const { email, password} = req.body
    const existingUser = await User.findOne({email})
    if(existingUser && ( await existingUser.matchPassword(password))){
        generateToken(res, existingUser._id)
        res.status(200).json({user: {
            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email
        }})
    }else{
        res.status(404).json('Something went wrong')
    }
}


exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.editUser = editUser
exports.createUser = createUser
exports.loginUser = loginUser