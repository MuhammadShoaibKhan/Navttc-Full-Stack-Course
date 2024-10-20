import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const BeMyFriend = () => {
    const { id } = useParams()
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [toxicity, setToxicity] = useState(0);
    const [loyalty, setLoyalty] = useState(0);
    const [friendliness, setFriendliness] = useState(0);

    function handleNameChange(e) {
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleAgeChange(e) {
        setAge(e.target.value);
        console.log(e.target.value);
    }

    function handleToxicityChange(e) {
        setToxicity(e.target.value);
        console.log(e.target.value);
    }
    function handleLoyaltyChange(e) {
        setLoyalty(e.target.value);
        console.log(e.target.value);
    }
    function handleFriendlinessChange(e) {
        setFriendliness(e.target.value);
        console.log(e.target.value);
    }

   
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(e)
        const res = await fetch('http://localhost:5000/friend/createfriend',{
            method:'POST',
            body: JSON.stringify({
                name: name,
                age: age,
                toxicity: toxicity,
                loyalty: loyalty,
                friendliness: friendliness
            }),
            headers: {
                "Content-Type": "application/json",
            },

        })
        const resData = await res.json()
        console.log(resData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    
                />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={handleAgeChange}
                    
                />
            </div>
            <div>
                <label htmlFor="toxicity">Toxicity Level out of 100</label>
                <input
                    type="range"
                    id="toxicity"
                    value={toxicity}
                    onChange={handleToxicityChange}
                    min="0" max="10"
                />
            </div>
            <div>
                <label htmlFor="loyalty">Loyalty</label>
                <input
                    type="range"
                    id="loyalty"
                    value={loyalty}
                    onChange={handleLoyaltyChange}
                    min="0" max="10"
                />
            </div>
            <div>
                <label htmlFor="friendliness">Friendliness</label>
                <input
                    type="range"
                    id="friendliness"
                    value={friendliness}
                    onChange={handleFriendlinessChange}
                    min="0" max="10"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BeMyFriend;
