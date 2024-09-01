function Myinformation({name ,age, email}){ // function myinformation(props) just pass one arogemt and used in all of the
    return( //{props.name} is another way 
        <>
        <h3>{name} </h3> 
        <h3>{age} </h3>
        <h3> {email}</h3>
        
        

        </>
    )
}
export default Myinformation