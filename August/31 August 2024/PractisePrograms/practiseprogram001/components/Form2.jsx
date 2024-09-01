import {useState} from "react"


const Form2 = () => {

    const [course1, setCourse1] = useState()
    const [course2, setCourse2] = useState()
    const [course3, setCourse3] = useState()


    function handleCourse1Change(e){
        setCourse1(e.target.value)
        console.log(course1)
    }

    function handleCourse2Change(e){
        setCourse2(e.target.value)
        console.log(course2)
    }

    function handleCoure3Change(e){
        setCourse3(e.target.value)
        console.log(course3)
    }

    function handleSubmit(e){
        e.preventDefault()
       console.log(course1,course2,course3)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="course1">Course1</label>
                <input type="text" value={course1} onChange={handleCourse1Change} placeholder="Enter your Course1"/>
            </div>
            <div>
                <label htmlFor="course2">Course2</label>
                <input type="text" value = {course2} onChange={handleCourse2Change} placeholder="Enter your Course2"/>
            </div>
            <div>
                <label htmlFor="course3">Course3</label>
                <input type="text" value = {course3} onChange={handleCoure3Change} placeholder="Enter your Course3"/>
            </div>
            <button>Submit</button>
        </form>
    )

}

export default Form2