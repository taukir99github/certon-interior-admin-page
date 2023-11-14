import React from 'react'
import "./Form2.css"
import {AiOutlineArrowRight} from 'react-icons/ai'

const Form2 = () => {
  return (
    <div>
         <div className="Text" style={{margin:'5px', fontWeight:'500'}}><h1>Product Details</h1></div>
       <div className="card">
      
      <div className="card-content">
        <form>
          <label htmlFor="title">Client Name</label>
          <input type="text"  name="title" required />

          <label htmlFor="subtitle">Category</label>
          <input type="text"  name="subtitle" required />

          <label htmlFor="description">Tag</label>
          <input type="text"  name="subtitle" required />

          <label htmlFor="Property Name">Property Name</label>
          <input type="text"  name="Add Photo" />

          <label htmlFor="Photo">Property Type</label>
          <input type="text"  name="Add Photo" />

          <label htmlFor="Photo">Date</label>
          <input type="Date" name="Add Photo" />
        </form>
        <div className="btn" style={{display:'flex'}}>
        <button>Submit</button>
        {/* <AiOutlineArrowRight/> */}
        
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Form2
