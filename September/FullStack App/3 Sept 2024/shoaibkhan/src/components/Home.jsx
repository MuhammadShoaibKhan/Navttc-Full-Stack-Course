import React from 'react'
import image from '../image/images.png'
import Form from '../components/Form'
//import Friend from './Friend'
//import FriendList from './FriendList'
import {Link} from 'react-router-dom'

const home = () =>{
    return(

        <>
        <img src={image}/>
        <h1>Muhammad Shoaib Khan</h1>
        <p>MSDS</p>
        <h2>30</h2>
        <Link to="https://openai.com/chatgpt/">Contact</Link> 
        <div>
        <Link to="/Form">Add New Friend</Link>
        <br/>
        <Link to="/FriendList">Friends Displays</Link>
        {/* <Link to="/Friend">Frind</Link> */}
        </div>
        </>
    )
}

export default home