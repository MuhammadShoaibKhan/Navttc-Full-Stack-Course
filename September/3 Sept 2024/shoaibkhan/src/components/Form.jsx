import {useState} from "react"
import App from "../App"
import home from "./Home"
import {Link} from 'react-router-dom'


const Form = () => {

    const [name, setName] = useState()
    const [email,setEmail] = useState()
    const [age, setAge] = useState()


    function handleNameChange(e){
        setName(e.target.value)
        console.log(name)
    }

    function handleAgeChange(e){
        setAge(e.target.value)
        console.log(age)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
        console.log(email)
    }

    function handleSubmit(e){
        e.preventDefault()
       console.log(name,age,email)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" value = {age} onChange={handleAgeChange} placeholder="Enter your age"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" value = {email} onChange={handleEmailChange} placeholder="Enter your email"/>
            </div>
            <button>Submit</button>

            <div>
            <Link to="/home">Back</Link> 
            </div>
        </form>
    )

}

export default Form