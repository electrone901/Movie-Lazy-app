//I ADDED LOGIN

import React from 'react';
import {Link} from 'react-router';
require('./Login.css')

 {/*GALLERY COMPONENT & SIDEBAR*/}
var Login = React.createClass({
  
    render() {
    return (
      <div className="gallery">
      

	        {/*LOGIN FORM*/} 
		    <div className="log">
		   {/* <p>Register</p>*/} 
		        <div className="card">
		            <img id="log" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
		            <form>
		                <input type="email" placeholder="Email address"/>
		                <input type="password" placeholder="Password" required/>
		                <div id="remember" className="checkbox">
		                    <label>
		                        <input type="checkbox"/> Remember me
		                    </label>
		                </div>
		                <button className="btn-success" type="submit">Sign in</button>
		            </form>

		            <a href="#"> Forgot the password? </a>
		        </div>
		    </div>


      </div>
      
    )
  }
})

export default Login;

