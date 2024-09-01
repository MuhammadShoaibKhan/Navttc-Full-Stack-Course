import Component from "./component"
import Myinformation from "./Myinformaton"
import Myhobbies from "./Myhobbies"

function App() {
  const Hobbies = [{
    name:"Danish",
    hobbies:["Criket","Explore world","Gym"]
  },
  {
    name:"Usama",
    hobbies:["Criket"," teaching","fitness"]
  },{
    name:"Ali ",
    hobbies:["Cricket"," reading","chess"]
  }]
  

  return (
     <>  
   <h1> parent Component</h1>
   <Component name = {'Danish'}/>
   
   <Myinformation name = {'Muhammad Danish'} age = {19}  email = {'dm.danishgmail.com'}/>
   <Myhobbies data = {Hobbies}/>
   </>
  )
}

export default App
