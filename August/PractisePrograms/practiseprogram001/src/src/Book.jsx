function Book({ title, description, publishedDate }) {
    const formattedDate = new Date(publishedDate).toDateString();
  
    return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <small><strong>Published Date:</strong> {formattedDate !== "Invalid Date" ? formattedDate : "Unknown Date"}</small>
      </div>
    );
  }
  
  export default Book