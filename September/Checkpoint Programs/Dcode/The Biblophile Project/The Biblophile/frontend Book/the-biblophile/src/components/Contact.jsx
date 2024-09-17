
function Contact() {
  return (
    <div className="container mt-4">
        <h2 style={{ color: 'GrayText', marginTop: "10px" , marginBottom:"10px", fontSize:"3rem", fontFamily:"serif", textAlign:"center"}}>Contact Us</h2>
    <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text"  className="form-control"  placeholder="Enter Name"/>
    </div>
    <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" className="form-control"  placeholder="Enter Email"/>
    </div>
    <div className="form-group">
        <label htmlFor="">Messege</label>
        <textarea  className="form-control" rows="6" placeholder="Enter Messege" ></textarea>
        
    </div>
    <div style={{textAlign:"center"}}>
        <button type="submit" className="btn btn-dark">submit</button>
    </div>
    </div>
  )
}

export default Contact