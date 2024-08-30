import './style.css';
function Myhobbies(props){
   // const styles = { color: 'blue', backgroundColor: 'red' }
    /* <h1 style={styles}>{item.name}</h1> */
    return(
        <div className='hobbies'>
        {
            props.data.map((item)=>(
                <>
                 <h1>{item.name}</h1> 
                <p>{item.hobbies}</p>

                </>
            ))
        }

        </div>
    )

}
export default Myhobbies