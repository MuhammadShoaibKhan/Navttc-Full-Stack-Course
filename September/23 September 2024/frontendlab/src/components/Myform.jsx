
import { useState,useEffect } from "react"
import { useParams ,Link, json} from "react-router-dom"
import Friends from "./Friends"
const Myform = ({friends}) => {
    const params = useParams()
    const[name,setName] =useState()
    const[contact,setContact] =useState()
    const[toxicity,setToxicity] =useState(0)
    const[loyalty,setLoyalty] =useState(0)
    const[age,setAge] = useState()
    const[friend, setFriend] = useState()
    const[friendliness,setFriendliness] =useState(0)
    const [editState, setEditState] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))

    function nameChange(e){
        setName(e.target.value)
        console.log(name);
    }
    function contactChange(e){
        setContact(e.target.value)
        console.log(contact);
        

    }
    function toxicityChange(e){
        setToxicity(e.target.value)
        console.log(toxicity);
        

    }
    function loyaltyChange(e){
        setLoyalty(e.target.value)
        console.log(loyalty);
        

    }
    function friendlinessChange(e){
        setFriendliness(e.target.value)
        console.log(friendliness);
        

    }
    const submithandle = async (e)=>{
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
    //    console.log(name, contact, toxicity, loyalty, friendliness)
       const res = await fetch("http://localhost:5000/friend/submit",{
        method:"POST",
        body:JSON.stringify({
            name:name,
            contact:contact,
            toxicity:toxicity,
            loyalty:loyalty,
            friendliness:friendliness
        }),
        headers:{
            "Content-Type":"application/json",
        },
       })
       const resData =await res.json()
       console.log(resData);
       
    
        

    }
    useEffect(()=>{
        if(friends){
            var dost = friends.find((friends)=> friends._id === params.id)
        }
        if(dost){
            setName(dost.name)
            setContact(dost.contact)
            setToxicity(dost.toxicity)
            setFriendliness(dost.friendliness)
            setLoyalty(dost.loyalty)
        }
    },[params.id,friends])
 
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={submithandle} >
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" value={name} onChange={nameChange}/>
                    </div>
                    <div  className="form-group">
                        <label htmlFor="name">Contact:</label>
                        <input type="text" className="form-control" value={contact} onChange={contactChange}/>
                    </div>
                    <div  className="form-group">
                        <label htmlFor="name">loyalty:</label>
                        <input type="range"  className="form-control" value={loyalty} onChange={loyaltyChange}  min="0" max="10"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Toxicity:</label>
                        <input type="range" className="form-control" value={toxicity} onChange={toxicityChange} min="0" max="10"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Friendliness:</label>
                        <input type="range" className="form-control" value={friendliness} onChange={friendlinessChange} min="0" max="10"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <h3><Link to="/friends">friendspage</Link></h3>
               <br />      
            <h3> <Link to="/">homepage</Link></h3>


        </>
    )
}
export default Myform
