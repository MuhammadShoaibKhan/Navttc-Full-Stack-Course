import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {useState, useContext} from "react"
import {Context} from '../App';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Profile (){
   const [oldPass,setOldPass] = useState('');
   const [newPass,setNewPass] = useState('');
   const [login,setLogin] = useContext(Context)
   const navigate = useNavigate()
   const user = JSON.parse(localStorage.getItem('user'))

   const handleOldPassChange = (e) => {
    setOldPass (e.target.value)
   };
   const handleNewPassCHange= (e) =>{
    setNewPass(e.target.value)
   };

   const handleSubmit = async(e) =>{
    e.preventDefault()
    const res = await fetch('http://localhost:5000/users/resetpassword',{
        method: 'PUT',
        body: JSON.stringify({newPassword: newPass,
            oldPassword: oldPass,
            user: user._id}
    ),
        headers: {"Content-Type": "application/json"}
    })
    const resData = await res.json();
    if(res.ok){
        alert("Password has been Changed")
        navigate('/login')
        setLogin(false)
    } else{
        console.log("Password Not Changed", res)
    }
   }


return(
    <Container>
   {
    user && <div className='mt-5'>
    {/* <img src={ali} alt='ali' /> */}
    <h1>{user?.name}</h1>
    <h2>{user?.email}</h2>
   </div>
   }
 

<Form onSubmit={handleSubmit} >
<Form.Group className="mb-3">
<Form.Label>Old Password :</Form.Label>
<Form.Control type="text" value={oldPass} placeholder="Enter Old Password" onChange={handleOldPassChange} />

</Form.Group>
<Form.Group className="mb-3">
<Form.Label>New Password :</Form.Label>
<Form.Control type="text" value={newPass} placeholder="Enter New password"onChange={handleNewPassCHange} />

</Form.Group>

<Button variants="primary" type="submit">
    Reset Password
</Button>
</Form>
</Container>
)
}
export default Profile;