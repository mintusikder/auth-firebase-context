import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)

  const handelLogout = () =>{
    logOut()
    .then(() =>{

    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-primary text-primary-content d-flex justify-between">
      <button className="btn btn-ghost text-xl">daisyUI</button>
      <div>
      <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
        {
          user ?
         <>
          <span>{user.email}</span>
          <button onClick={handelLogout} className="btn btn-xs">Sign Out</button>
         </>
           : <Link to='/login'>Login</Link>
        }
      </div>
      </div>
    </div>
  );
};

export default Header;
