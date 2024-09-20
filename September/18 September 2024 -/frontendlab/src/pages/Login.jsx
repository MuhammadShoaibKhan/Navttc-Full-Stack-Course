import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react"
import Container from 'react-bootstrap/Container';

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e) =>{
        setPass(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const abc = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            body: JSON.stringtify({
                email: email,
                password: pass,
            }),
            headers: {"Content-Type":'application/json'}
        })
        const xyz = await abc.json()
        console.log(xyz)
        setEmail('')
        setPass('')
    
}

return(
<Container className='mt-5'>
    <Form.Group onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        < Form.Control type="email" value={email} placeholder="Enter email"onChange={handleEmailChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" value={pass} placeholder="Enter password"onChange={handlePassChange} />

        </Form.Group>

        <Button variant = "primary" type="submit">
            Submit
        </Button>
        </Form.Group>

    
</Container>
)
}
export default Login;