import {useState} from "react"
import {useParams} from "react-router-dom"
import App from "../App"
import home from "./Home"
import {Link} from 'react-router-dom'


const Form = () => {

    const {id} = useParams()
    const [name, setName] = useState("")
    const [age,setAge] = useState(0)
    const [friendliness, setFriendliness] = useState(0)
    const [toxicity, setToxicity] = useState(0)
    const [loyalty, setLoyalty] = useState(0)



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

    function handleLoyaltyChange(e){
        setLoyalty(e.target.value)
        console.log(loyalty)
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //    console.log(name,age,friendliness,toxicity,loyalness)
    // }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(e)
        console.log(name,age,friendliness,toxicity,loyalty)
        const res = await fetch('http://localhost:4000/friend/createfriend',{
            method: 'POST',
            body:JSON.stringify({

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
    useEffect(()=>{
        
    })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your friend name"/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="range" value = {age} onChange={handleAgeChange} placeholder="Enter your friend age" min="0" max="10"/>
            </div>
            <div>
                <label htmlFor="friendliness">Friendliness</label>
                <input type="range" value = {friendliness} onChange={handleFriendlinessChange} placeholder="Enter your friend friendliness level" min="0" max="10"/>
            </div>
            <div>
                <label htmlFor="toxicity">Toxicity</label>
                <input type="range" value = {toxicity} onChange={handleToxicityChange} placeholder="Enter your friend toxicity level" min="0" max="10"/>
            </div>
            <div>
                <label htmlFor="loyalty">Loyalty</label>
                <input type="range" value = {loyalty} onChange={handleLoyaltyChange} placeholder="Enter your friend Loyalty level" min="0" max="10"/>
            </div>
            <button>Submit</button>

            {/* <div>
            <Link to="/">Back</Link> 
            </div> */}
        </form>
    )

}

export default Form