import {useState} from "react"
import App from "../App"
import home from "./Home"
import {Link} from 'react-router-dom'


const Form = () => {

    const [name, setName] = useState()
    const [age,setAge] = useState()
    const [friendliness, setFriendliness] = useState()
    const [toxicity, setToxicity] = useState()
    const [loyalness, setLoyalness] = useState()



    function handleNameChange(e){
        setName(e.target.value)
        console.log(name)
    }

    function handleAgeChange(e){
        setAge(e.target.value)
        console.log(age)
    }

    function handleFriendlinessChange(e){
        setFriendliness(e.target.value)
        console.log(friendliness)
    }

    function handleToxicityChange(e){
        setToxicity(e.target.value)
        console.log(toxicity)
    }

    function handleLoyalnessChange(e){
        setLoyalness(e.target.value)
        console.log(loyalness)
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //    console.log(name,age,friendliness,toxicity,loyalness)
    // }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(e)
        console.log(name,age,friendliness,toxicity,loyalness)
        const res = await fetch('http://localhost:4000/friend/createfriend',{
            method: 'POST',
            body:JSON.stringify({

                name: name,
                age: age,
                toxicity: toxicity,
                loyalness: loyalness,
                friendliness: friendliness
            
            }),
            headers: {
                "Content-Type": "application/json",
               
            },
        
    })

    const resData = await res.json()
    console.log(resData)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your friend name"/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" value = {age} onChange={handleAgeChange} placeholder="Enter your friend age"/>
            </div>
            <div>
                <label htmlFor="friendliness">Friendliness</label>
                <input type="text" value = {friendliness} onChange={handleFriendlinessChange} placeholder="Enter your friend friendliness level"/>
            </div>
            <div>
                <label htmlFor="toxicity">Toxicity</label>
                <input type="text" value = {toxicity} onChange={handleToxicityChange} placeholder="Enter your friend toxicity level"/>
            </div>
            <div>
                <label htmlFor="loyalness">Loyalness</label>
                <input type="text" value = {loyalness} onChange={handleLoyalnessChange} placeholder="Enter your friend loyalness level"/>
            </div>
            <button>Submit</button>

            <div>
            <Link to="/">Back</Link> 
            </div>
        </form>
    )

}

export default Form