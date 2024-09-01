import Component from "./component"
import Myinformation from "./Myinformaton"
import Myhobbies from "./Myhobbies"
import BookList from './components/BookList';

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


  const books = [
    {
        bookName: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        bookDetails: 'A novel about the serious issues of race and class in the 1930s American South.'
    },
    {
        bookName: '1984',
        author: 'George Orwell',
        bookDetails: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.'
    },
    {
        bookName: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        bookDetails: 'A novel set in the Jazz Age that critiques the American Dream and explores themes of decadence and idealism.'
    }
];
  
<BookList data={books} />

  return (
     <>  
   <h1> parent Component</h1>
   <Component name = {'Danish'}/>
   
   <Myinformation name = {'Muhammad Danish'} age = {19}  email = {'dm.danishgmail.com'}/>
   <Myhobbies data = {Hobbies}/>
   

    <BookList books ={[books.bookName, books.author, books.bookDetails]}/>


        <div className="App">
            <header className="App-header">
                <h1>Book List</h1>
                <BookList books={books} />
            </header>
        </div>
  


{/* // Define Prop Types
{ Book.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        bookDetails: PropTypes.string.isRequired
    }).isRequired
}; */} 


    return (
        <div className="App">
            <header className="App-header">
                <h1>Book List</h1>
                <BookList books={books} />
            </header>
        </div>
    );
   
   </>
  )
}

export default {App, BookList} ; 

