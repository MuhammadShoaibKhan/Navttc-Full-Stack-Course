// const Product = require('../Models/productModel.js')
const User = require('../Models/userModel.js')

const createUser = async(req,res) => {

    const {name,email,age} = req.body
    //console.log(name,email,age)
    const user = new User({
          name: name,
          email: email,
          age:age
    })
    console.log(user)
    try{
      const createdUser = await user.save()
      res.status(201).json({user: createdUser})
      console.log("User is created")
    } catch (err) {
      res.status(500).json('User is not Created')
      console.error('Error creating User:', err.message);
  
    }
  }

  const getUser = async(req,res) =>{
    try {
        const users = await User.find({})
    res.status(200).json(users)
    } catch (error) {
        res.status(500).json('Users not Found')
        console.error('Error Getting User:', err.message);
    }    
  }

  const editUser = async(req,res) =>{
    const id=req.params.id
    const user = await User.findById({_id:id})
     const {name,email,age} = req.body
     if(user){
         try {
             user.name = name || user.name
             user.email = email || user.email            
             user.age = age || user.age
             const updatedUser = await user.save()
             res.status(200).json({user:updatedUser})
         } catch (error) {
             res.status(500).json(err)
         }
     } else{
         res.status(404).json({message: 'User not found'})
         console.error('Error editing User:', err.message);
     }
     
  }

  const deleteUser = async(req,res) =>{
    const id = req.params.id
    const user = await User.findById({_id:id})
    if(user){
        try {
        await User.deleteOne({_id:id})
        res.status(200).json('User is Deleted')
        } catch (error) {
            res.status(500).json(err)
          //  console.error('Error deleting User:', err.message);
        }
        
    }else{
        res.status(404).json({message: 'User not found'})
      //  console.error('Error deleting User:', err.message);
    }
  }

exports.getUser = getUser 
exports.deleteUser = deleteUser
exports.editUser = editUser
exports.createUser = createUser
