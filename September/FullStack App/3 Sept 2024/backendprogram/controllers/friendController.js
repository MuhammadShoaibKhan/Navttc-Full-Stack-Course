const Friend = require('../models/friendModel.js')


const createFriend = async(req, res)=>{
    
    const {name, age, toxicity, loyalty, friendliness} = req.body;

    if (!name || !age || !toxicity || !loyalty || !friendliness) {
        return res.status(400).json({ message: 'All fields are required' });

}
    
    const friend = new Friend({
        name: name,
        age:age,
        toxicity: toxicity,
        loyalty: loyalty,
        friendliness: friendliness
    });
    console.log(friend)
    try {
        const createdFriend = await friend.save() 
        res.status(201).json({friend: createdFriend})
        res.status(201).json({ message: 'Friend created successfully', friend });
    } catch (err) {
        res.status(500).json('Friend is not Created')
        res.status(500).json({ message: 'Server error', error: error.message });
    }  
}

const getFriends = async(req, res)=>{
    try {
        const friends = await Friend.find({})
        res.status(200).json(friends);
    } catch (err) {
        res.status(500).json('Friends not found')
        res.status(500).json({ message: 'Error fetching friends', error: error.message });
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

exports.getFriends = getFriends
exports.deleteFriend = deleteFriend
exports.editFriend = editFriend
exports.createFriend = createFriend