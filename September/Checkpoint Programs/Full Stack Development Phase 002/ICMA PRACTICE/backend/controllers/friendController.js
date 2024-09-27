const Friend = require('../models/friendModel.js')


const createFriend = async(req, res)=>{
    const {name, age, toxicity, loyalty, friendliness, friend} = req.body 
    const createdfriend = new Friend({
        name: name,
        age:age,
        toxicity: toxicity,
        loyalty: loyalty,
        friendliness: friendliness,
        friend: friend
    })
    console.log(friend)
    try {
        const createdFrnd = await createdfriend.save() 
        res.status(201).json({friend: createdFrnd})
    } catch (err) {
        res.status(500).json('Friend is not Created')
    }  
}

const getFriends = async(req, res)=>{
    try {
        const friends = await Friend.find({})
        res.status(200).json(friends) 
    } catch (err) {
        res.status(500).json('Friends not found')
    }
}
const editFriend = async(req, res)=>{
    const id = req.params.id
    const friend = await Friend.findById({_id:id})
    const {name, age,toxicity, loyalty, friendliness} = req.body 
    if(friend){
        try { 
        friend.name = name || friend.name
        friend.age = age || friend.age
        friend.toxicity = toxicity || friend.toxicity
        friend.loyalty = loyalty || friend.loyalty
        friend.friendliness = friendliness || friend.friendliness

        const updatedFriend = await friend.save()
        res.status(200).json({friend: updatedFriend}) 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'friend not found'})
    }
}

const deleteFriend = async(req, res)=>{
    const id = req.params.id
    const friend = await Friend.findById({_id:id})
    if(friend){
        try {  
        await Friend.deleteOne({_id:id})
        res.status(200).json('Friend is Deleted') 
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(404).json({message: 'Friend not found'})
    }
}

const getFriendsByUser = async(req, res)=>{
    try {
        const friends = await Friend.find({friend: req.params.id})  
        res.status(200).json(friends) 
    } catch (err) {
        res.status(500).json('Friends not found')
    }

}

exports.getFriends = getFriends
exports.deleteFriend = deleteFriend
exports.editFriend = editFriend
exports.createFriend = createFriend
exports.getFriendsByUser = getFriendsByUser