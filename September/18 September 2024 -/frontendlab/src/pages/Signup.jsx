import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import Container from 'react-bootstrap/Container';

export const Signup = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleNameChange = (e) => {
        setName(e.taget.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) =>{
        setPass(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log({
            email: email,
            password: password,
            name: name,

        })

        const abc =await fetch('http://localhost:5000/users/createUser', {
            method: 'POST',
            body: JSON.stringtify({
                email:email,
                password: password,
                name: name,
            }),
            headers: ("Content-Type": 'application/json')
        })
        const xyz = await abc.json()
        console.log(xyz)
        setEmail('')
        setPassword('')
        setName('')
    }

}