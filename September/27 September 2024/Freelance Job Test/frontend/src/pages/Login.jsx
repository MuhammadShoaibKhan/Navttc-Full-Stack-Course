import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import {Context} from '../App'

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [login, setLogin] = useContext(Context)

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }
    const handlePassChange = (e)=>{
        setPass(e.target.value)
    }
    const handleSubmit = async(e)=>{  
        e.preventDefault()
        try{
          const res = await fetch('http://localhost:5000/users/login',{
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                email:email,
                password:pass,
            }),
            headers:{"Content-Type":'application/json'}            
        })
        const resData = await res.json()
        localStorage.setItem("user", JSON.stringify(resData.user))
        if(res.ok){
          setLogin(true)
          setEmail('')
          setPass('')
          navigate('/')
        }else{
          console.log('Login failed:', res);
        }

        }catch(err){
          console.log(err)
        }
       
    }

    useEffect(() => {
      if(login){
        navigate('/')
      }
    }, [login])
    

  return (
    <Container className='mt-5'>
    <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
        <Form.Label>Email address :</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={handleEmailChange} />
       
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password :</Form.Label>
        <Form.Control type="password" value={pass} placeholder="Enter password"onChange={handlePassChange} />
       
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </Container>
  )
}

export default Login