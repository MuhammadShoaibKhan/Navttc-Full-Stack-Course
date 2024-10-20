import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const BeMyFriend = ({friends}) => {
    const params = useParams()
    const [name, setName] = useState()
    const[friendliness, setFriendliness]= useState(0)
    const[toxicity, setToxicity]= useState(0)
    const[loyalty, setLoyalty]= useState(0)
    const[age, setAge] = useState()
    const[friend, setFriend] = useState()
    const [editState, setEditState] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))

    function handleNameChange(e){
        setName(e.target.value)
        // console.log(name)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
        // console.log(name)
    }
    function handleToxicityChange(e){
        setToxicity(e.target.value)
        // console.log(name)
    }
    function handleFriendlinessChange(e){
        setFriendliness(e.target.value)
        // console.log(name)
    }
    function handleLoyaltyChange(e){
        setLoyalty(e.target.value)
        // console.log(name)
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submit behavior
        console.log('submiting')
        const payload = {
            name: name,
            age: age,
            toxicity: toxicity,
            loyalty: loyalty,
            friendliness: friendliness,
            friend: user._id
        };
    
        try {
            if (editState) {
                console.log('Editing...');
                const editRes = await fetch(`http://localhost:5000/friend/editfriend/${params.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const editResData = await editRes.json();
                console.log(editResData);
                setAge('')
                setName('')
                setFriendliness(0)
                setLoyalty(0)
                setToxicity(0)
            } else {
                console.log('Creating...');
                const createRes = await fetch('http://localhost:5000/friend/createfriend', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const createResData = await createRes.json();
                console.log(createResData);
                setAge('')
                setName('')
                setFriendliness(0)
                setLoyalty(0)
                setToxicity(0)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    useEffect(()=>{
        if(friends){
            var dost = friends.find((friend)=> friend._id === params.id )
        }

       if(dost){
        setAge(dost.age)
        setName(dost.name)
        setFriendliness(dost.friendliness)
        setLoyalty(dost.loyalty)
        setToxicity(dost.toxicity)
       }

       if(params.id){
        setEditState(true)
       }
       
    },[params.id, friends])

  return (
    <Container className="mt-5">
    <h1>Be My Friend</h1>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mt-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" value={name} onChange={handleNameChange} placeholder='Enter your name'/>
        </Form.Group>
        <Form.Group className="mt-3">
            <label htmlFor="age">Age</label>
            <Form.Control type="text"  value={age} onChange={handleAgeChange} placeholder='Enter your Age'/>
        </Form.Group >
        <Form.Group style={{display: 'flex', alignItems:'center' }} className="mt-3">
            <Form.Label htmlFor="toxicity">Toxicity</Form.Label>
            <Form.Control type="range"  value={toxicity} onChange={handleToxicityChange} min="0" max="10"/>
            <p>{toxicity}</p>
        </Form.Group>
        <Form.Group style={{display: 'flex', alignItems:'center' }} className="mt-3">
            <Form.Label htmlFor="friendliness">Friendliness</Form.Label>
            <Form.Control type="range"  value={friendliness} onChange={handleFriendlinessChange} min="0" max="10"/>
            <p>{friendliness}</p>
        </Form.Group>
        <Form.Group style={{display: 'flex', alignItems:'center' }} className="mt-3">
            <Form.Label htmlFor="loyalty">Loyalty</Form.Label>
            <Form.Control type="range"  value={loyalty} onChange={handleLoyaltyChange} min="0" max="10"/>
            <p>{loyalty}</p>
        </Form.Group>
        <Button className="mt-3" type="submit">Submit</Button>
    </Form>
    </Container>
  )
}

export default BeMyFriend