import MyCard from "./MyCard";
import { useNavigate } from "react-router-dom";
import './style.css'; // Import your CSS


function Getbook({ book }) {
  
  return (

    <>
    
    <div className="container images">
      <div className="card-group">
        <MyCard book={book} />
      </div>
    
    </div>
    </>
  );
}

export default Getbook;