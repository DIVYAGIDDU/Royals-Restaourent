import React from "react";
import "./Contact.css"
const Contact = () => {

    return <div class='some-page-wrapper' id='contact' className="mt-5 text-center" > <hr />
        <h1><em>Contact US</em></h1> <hr />
        <div className="container" id="abc">
            <div className="row">
                <div className="col-md-6">
                <div className="card">
                  <div className="card-header text-center bg-dark text-white">
                    <h1>Royals Restaurent</h1>
                  </div>
                  <div className="card-body">
                  <div className="form">
                        <div className="form-group">
                        <label>Customer Name:</label>
                            <input type="text" placeholder="Enter your name Name" className="form-control"/> 
                            <span id="spanmessage">Please enter your name</span>
                        </div>
                        <div className="form-group">
                        <label>Contact Number:</label>
                            <input type="text" placeholder="Enter Contact Number" className="form-control"/> 
                            <span id="spanmessage">Please enter contact number</span>
                            </div>
                            <div className="form-group">
                            <label>Customer Location:</label>
                            <input type="text" placeholder=" Enter your Location" className="form-control" /> 
                            <span id="spanmessage">Please enter your location</span>
                            </div>
                            <div className="form-group">
                            <label>Customer Emial:</label>
                            <input type="text" placeholder="Enter your Email" className="form-control"/>
                            <span id="spanmessage">Please enter your email</span>
                        </div>
                        <button onClick="submit" className="btn btn-warning">Submit</button>
                    </div>
                  </div>
                </div>
                    
              
                </div>
                <div class="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31105.726370283377!2d77.67501133841091!3d12.958038838300805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b4551d0957%3A0x597894d77e1e4919!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1668854222199!5m2!1sen!2sin" height='600px' width='550px'></iframe>
             </div>

            </div>

        </div>
        <p>
    <a href="#">Back To Home</a>
    </p>
    </div> 
}
export default Contact