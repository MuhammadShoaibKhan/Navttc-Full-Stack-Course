
import BookList from "../components/BookList";
import Shoaib from "./Shoaib";
import Hobbies from "../components/Hobbies";
import Form from "../components/Form";
import Form2 from "../components/Form2";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Mycomponent from "../components/Mycomponent";
import Mycomp2 from "../components/Mycomp2";


// const Hobbies = [{
//   name:"Danish",
//   hobbies:["Criket","Explore world","Gym"]
// },
// {
//   name:"Usama",
//   hobbies:["Cricket"," teaching","fitness"]
// },{
//   name:"Ali ",
//   hobbies:["Cricket"," reading","chess"]
// }]



function App() {
  return (
    <>
   
      <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form/>} />
        <Route path="/form3" element={<Form2/>} />
        <Route path="/form4" element={<Mycomponent/>} />
        <Route path="/mycomp" element={<Mycomp2/>} />

      </Routes>
      </BrowserRouter>
    
    </>
  );
  
}

export default App;