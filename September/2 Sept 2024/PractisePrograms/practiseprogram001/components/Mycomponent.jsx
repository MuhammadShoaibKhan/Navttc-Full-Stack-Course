import React from 'react'
import {useState} from "react"


const Mycomponent = () => {

    const [name, setName] = useState()
    const [qualification, setQualification] = useState()
    const [age, setAge] = useState()

    function handleNameChange(e){
        setName(e.target.value)
        console.log(name)
    }

    function handleQualificationChange(e){
        setQualification(e.target.value)
        console.log(qualification)
    }

    function handleAgeChange(e){
        setAge(e.target.value)
        console.log(age)
    }

   

    function handleSubmit(e){
        e.preventDefault()
       console.log(name,age,qualification)
    }

  return (
    <div>
           {/* Display the name in an <h1> tag */}
           {name && <h1>{name}</h1>}
    <form onSubmit={handleSubmit}>
    <div>
    <div>
                <label htmlFor="<h1>name</h1>">Name</label>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
            </div>
            {age && <h2>{age}</h2>}
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" value = {age} onChange={handleAgeChange} placeholder="Enter your age"/>
            </div>
            {qualification && <h1>{qualification}</h1>}
            <div>
                <label htmlFor="qualification">Qualification</label>
                <input type="text" value = {qualification} onChange={handleQualificationChange} placeholder="Enter your Qualification"/>
            </div>

    </div>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default Mycomponent