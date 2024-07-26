import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";



function Navbar() {
return(

<div id="header">
        <div class="navbar">
            <div class="navbar-logo">
                <a href="#home">  <h1><span className="logocaracter">Movies</span>up</h1> </a>  
            </div>

            <ul class="liste">
                <li>   <Link to="/"  > Home   </Link>    </li> 
                <li>Liste Movies</li>
                <li>   <Link to="/add"> AddMovie  </Link> </li>
        

            </ul>
        
       

        </div>
     

</div>

);
}

export default Navbar