const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoute.js')
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('your string').then(()=>{
    console.log('Mongodb connected')
})

// app.get('/',(req,res)=>{
//     res.send(`<form method="POST">
//     <label>Name</label><input name="name">
//     <label>Email</label><input name="email">
//     <label>Age</label><input name="age">
//     <button type="submit">Submit</button></form>`)
// })

// app.post('/', async(req, res)=>{
//     const {name, email, age} = req.body 
//     const user = new User({
//         name: name,
//         email: email,
//         age:age
//     })
//     console.log(user)
//     try {
//         const createdUser = await user.save() 
//         res.status(201).json({user: createdUser})
//     } catch (err) {
//         res.status(500).json('User is not Created')
//     }   
// })

// app.get('/users', async(req,res)=>{
//     try {
//         const users = await User.find({})
//         res.status(200).json(users) 
//     } catch (err) {
//         res.status(500).json('Users not found')
//     }
   
// })

// app.delete('/users/:id',async(req, res)=>{
//     const id = req.params.id
//     const user = await User.findById({_id:id})
//     if(user){
//         try {  
//         await User.deleteOne({_id:id})
//         res.status(200).json('User is Deleted') 
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     }else{
//         res.status(404).json({message: 'User not found'})
//     }
// })


// app.put('/:id',async(req, res)=>{
//     const id = req.params.id
//     const user = await User.findById({_id:id})
//     const {name, email, age} = req.body 
//     if(user){
//         try { 
//          user.name = name || user.name
//          user.email = email || user.email
//         user.age = age || user.age
//         const updatedUser = await user.save()
//         res.status(200).json({user: updatedUser}) 
//         } catch (err) {
//             res.status(500).json(err)
//         }
//     }else{
//         res.status(404).json({message: 'User not found'})
//     }
// })

app.use('/users', userRoutes)

app.listen(5000)