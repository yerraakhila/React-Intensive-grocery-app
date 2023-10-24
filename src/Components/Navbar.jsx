import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const [loginStatus, setLoginStatus] = useState(false)
  useEffect(()=>{
      let token = localStorage.getItem('token')
      if(token){
          setLoginStatus(true)
      }
      else{
          setLoginStatus(false)
      }
  },[])
  const {cartItemsNum} = useSelector((state)=> state)
  function handleLogout(){
    localStorage.clear();
    setLoginStatus(false)
    
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">GroceryApp</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <Link className="btn btn-warning">
             Cart <span className="badge badge-dark">{cartItemsNum} </span>
          </Link> ||
          {loginStatus ? 
            <Link className="btn btn-outline-danger" to ="/" onClick={handleLogout}>Logout</Link> :
            <Link className="btn btn-outline-primary" to="/login">Login</Link>
          }
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
    