
import BookList from "../components/BookList";
import Shoaib from "./Shoaib";





function App() {
  return (
    <>
    <div className="App">
      <h1>Book Collection</h1>
      <BookList />
      <h2>Shoaib function print</h2>
      <Shoaib name = "Shoaib Khan" />
    </div>
    </>
  );
  
}

export default App;