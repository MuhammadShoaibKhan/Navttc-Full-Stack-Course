
import BookList from "../components/BookList";
import Shoaib from "./Shoaib";
import Hobbies from "../components/Hobbies";
import Form from "../components/Form";
import Form2 from "../components/Form2";


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
    <div className="App">
      {/* <h1>Book Collection</h1> */}
      {/* <BookList />
      <h2>Shoaib function print</h2>
      <Shoaib name = "Shoaib Khan" /> */}
     {/* <h3>Hobbies Print</h3>
      <Hobbies /> */}
      <Form2/>
      <Form/>
    </div>
    </>
  );
  
}

export default App;