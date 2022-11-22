import React from "react";
import './Booktable.css'
const Booktable=()=>{
    return <div className="some-page-wrapper">
    <div className="container" id="booktable"  >
    <div className="row">
        <div className="col-md-12">
        <div className="card" >
          <div className="card-header text-center bg-dark text-white">
            <h1>Reserve your Table</h1>
          </div>
          <div className="card-body">
          <div className="form">
                <div className="form-group">
                <label> Name:</label>
                    <input type="text" placeholder="First Name" className="form-control"/>  <br/>
                    <input type="text" placeholder="Last Name" className="form-control"/>
                </div>
                <div className="form-group">
                <label> Email:</label>
                    <input type="email" placeholder="Enter your email" className="form-control"/>  
                   
                </div>
                <div className="form-group">
                <label> Phone Number:</label>
                    <input type="number" placeholder="Enter your Number" className="form-control"/>  <br/>
                </div>
                <select id="select" className="form-group">
            <option selected>select Table</option>
            <option >1 st Table</option>
            <option>2 st Table</option>
            <option>3 st Table</option>
            <option>4 st Table</option>
            <option>5 st Table</option>
            </select> <br/><br/>
                   <button onClick="book" id='bookbtn' className="btn btn-dark" >Book</button>
    </div>
    
    </div>
    
    
    
    </div>
    
    
    </div>
    
    
    
    </div>
    
    
    </div> <br/>
    <p className="text-center">
    <a href="/">Back To Top</a>
   </p>
    
    </div>

}
export default Booktable