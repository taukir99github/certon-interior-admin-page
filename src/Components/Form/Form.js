import React from 'react';
import './Form.css'; 

function Form() {
  return (
    <>
    <div className="Text" style={{margin:'5px', fontWeight:'500'}}><h1>Add Product</h1></div>
    <div className="card">
      
      <div className="card-content">
        
      
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="subtitle">Subtitle:</label>
          <input type="text" id="subtitle" name="subtitle" required />

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required textarea rows="4" cols="30"></textarea>

          <label htmlFor="Photo">Add Photo:</label>
          <input type="file" id="imageUrl" name="Add Photo" textarea rows="4" cols="30"/>

         
        </form>
      </div>
    </div>
    </>
  );
}

export default Form;
