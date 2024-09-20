import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import Container from 'react-bootstrap/Container';


export const Signup = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) =>{
        setPassword(e.target.value)
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
            credentials: 'include',
            body: JSON.stringtify({
                email:email,
                password: password,
                name: name,
            }),
            headers: {"Content-Type": 'application/json'}
        })
        const xyz = await abc.json()
        console.log(xyz)
        setEmail('')
        setPassword('')
        setName('')
    }
    return(
        <Container className = 'mt-20'>
            <Form onSubmit={handleSubmit} className="mt-5">
            <Form.Group className="mr-5 mb-3 mt-1.5">
                <Form.Label htmlFor="name">Name :</Form.Label>
                <Form.Control value={name} type="text" placeholder='Enter Name' onChange={handleNameChange} />
            </Form.Group>
            <Form.Group className="ml-5 mb-3 mt-1.5">
                <Form.Label htmlFor="email">Email :</Form.Label>
                <Form.Control value={email} type="email" placeholder='Enter Email' onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group className="ml-5 mb-3 mt-2">
                <Form.Label htmlFor="password">Password :</Form.Label>
                <Form.Control value={password} type="password" placeholder='Enter Password' onChange={handlePassChange} />
            </Form.Group>
            <Button type="submit" variant="primary">Signup</Button>

            </Form>
        </Container>
    )

}

export default Signup;