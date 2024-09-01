import './style.css';
import { useState } from 'react';

function MyHobbies(props) {
    const [newHobby, setNewHobby] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setNewHobby(e.target.value);
    };

    // Handle button click
    const handleClick = () => {
        // Add logic to handle new hobby submission, e.g., updating props or state
        console.log('New Hobby:', newHobby);
        setNewHobby(''); // Clear the input after submission
    };

    return (
        <div className='hobbies'>
            {props.data.map((item) => (
                <div key={item.name}>
                    <h1>{item.name}</h1>
                    <ol>
                        {item.hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ol>
                </div>
            ))}
            <input
                value={newHobby}
                onChange={handleChange}
                type='text'
                placeholder='Add new hobby'
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

export default MyHobbies;