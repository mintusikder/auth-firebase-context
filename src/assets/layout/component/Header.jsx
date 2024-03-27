import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content d-flex justify-between">
      <button className="btn btn-ghost text-xl">daisyUI</button>
      <div>
      <Link className="btn btn-ghost text-xl" to='/'>Home</Link>
        <Link className="btn btn-ghost text-xl" to='/login'>Login</Link>
        <Link className="btn btn-ghost text-xl" to='/register'>Register</Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
