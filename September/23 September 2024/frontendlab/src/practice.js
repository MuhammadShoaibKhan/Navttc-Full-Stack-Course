// to write a get api using fetch

// we will use fetch in an async function

const getWhatever = async() =>{

    // initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.

}

// calling the function
getWhatever()

// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    // initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
}

// calling the function
getWhatever()


// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    //initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.

}

// calling the function
getWhatever()


// to write a get api using fetch
// we will use fetch in an async function

const getWhatever = async() =>{
    //initializing a variable for storing the res
    const xyz = await fetch('URL')

    // We are converting the initial response into json
    consst abc = await xyz.json()

    // now we can use the converted res as our will.
}

// calling the function
getWhatever()

// we will write a delete handler that will use fetch for delete

const deleteHandler = async(particularIdToDel) => {
    // Initializing a variable for storing the res
    // the fetch has 2 parmas one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //we are converting the initial res into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
}

// THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
//   <button onClick={() =>deleteHandler(whatEver._id)}>Delete</button>

// we will write a delete handler that will use fetch for delete
const deleteHander = async(particularIdToDel) =>{
    // Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we 
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //we are converting the initial res into json
    const abc = await xyz.json()

    //now we can use the converted res as our will.
    
}

// THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onClick={() => deleteHandler(whatEver._id)}>Delete</button>

// We will write a delete handler that will use fetch for delete 
const deleteHander = async(particularIdToDel) =>{
    //Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.
    const xyz = await fetch(`URL/${particularIdToDel}`,{
        method: 'DELETE'
    })
    //We are converting the initial res into json
    const abc = await xyz.json()
    //now we can use the converted res as our will.
}

//THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onCLICK={() => deleteHandler(whatEver._id)}>DELETE</button>

// We will write a delete handler that will use fetch for delete 
const deleteHander = async(particularIdToDel) =>{
    //Initializing a variable for storing the res
    // the fetch has 2 params one is url other is an object and here we
    // are passing method:'DELETE' bcz we are calling a del api.

    const xyz = await fetch(`URL/${particularIdToDel}`)
    method:'DELETE'
}
//we are converting the initial res into json
const abc = await xyz.json()
 //now we can use the converted res as our will.


//THE DELETE WILL TRIGGERED IN RES TO ONECLICK EVENT
// <button onClick={() => deleteHandler(whatEver._id)}>DELETE</button>


//we will use our POST fetch api with a submitHandler
// which will be triggered on an onSubmit event in a form

const submitHandler = async(e) =>{
    
    // It is preventing the default reload
    e.preventDefault()

    //we will define our req body
    const body = {
        // you desired fields
        // for example
        name: name
    };

    // initializing a vairbale for storing the res
    // the fetch has 2 params one is url other is an req object and here we

    const xyz = await fetch(`URL`, {
        // are passing method: 'POST' bcz we are calling a post api.
        method: 'POST',
        // we are converting our body into json bcz server expect json
        body: JSON.stringify(body),
        // we are telling the that we are sending data in json format
        headers: {
            "Content-Type":"application/json",
        },
    })
    //We are converting the initail res into json
    const abc = await xyz.json()

    // now we can use the converted res as our will.    

}

// THE POST WILL BE TRIGGERED IN RES TO ONSUBMIT EVENT
//<form onSubmit={handleSubmit}>
// form body
//</form>



//we will use our POST fetch api with a submitHandler
// which will be triggered on an onSubmit event in a form

const submitHandler = async(e) =>{
    
    // It is preventing the default reload
    e.preventDefault()

    //we will define our req body
    const body = {
        // you desired fields
        // for example
        name: name
    };

    // initializing a vairbale for storing the res
    // the fetch has 2 params one is url other is an req object and here we

    const xyz = await fetch(`URL`, {
        // are passing method: 'POST' bcz we are calling a post api.
        method: 'POST',
        // we are converting our body into json bcz server expect json
        body: JSON.stringify(body),
        // we are telling the that we are sending data in json format
        headers: {
            "Content-Type":"application/json",
        },
    })
    //We are converting the initail res into json
    const abc = await xyz.json()

    // now we can use the converted res as our will.    

}

// THE POST WILL BE TRIGGERED IN RES TO ONSUBMIT EVENT
//<form onSubmit={handleSubmit}>
// form body
//</form>



//We will use our POST Fetch API with a submitHandler
//which will triggered on an onSubmit event in a form

const submitHandler = async(e) => {

//It is preventing the default reload
e.preventDefault();

//we will define our req body
const body = {
    // your desired fields
    // for example

    
}

};

