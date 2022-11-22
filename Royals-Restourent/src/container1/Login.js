import React from "react";
import './Login.css'
const Login = () => {

    return <div className="some-page-wrapper" id="login">
        <div className="container" >
<div className="row">
<div className="col-md-10 offset=md-1">
<div className="row">
<div className="col-md-5 register-left">
<img src="https://www.freeiconspng.com/thumbs/arrow-down-icon-png/red-arrow-down-icon-png-30.png" width="50px" height="60px"/>
<h3>Join US</h3>
<p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.
</p>
<button type="button" className="btn btn-primary">About Us</button>
</div>
<div className="col-md-7 register-right">
<h2>Log In /Register Here</h2>
<div className="register-form">
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Name"/>
  </div>
  <div className="form-group">
  <input type="text" className="form-control" placeholder="User Name"/>
</div>
<div className="form-group">
<input type="email" className="form-control" placeholder="Email"/>
</div>
<div className="form-group">
<input type="password" className="form-control" placeholder="Password"/>
</div>
<button type="button" className="btn btn-primary">Log In</button>
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
export default Login