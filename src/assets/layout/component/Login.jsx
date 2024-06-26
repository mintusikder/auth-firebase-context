import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {signIn,signinWithGoogle} = useContext(AuthContext)

  const handelLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

      signIn(email,password)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)
        form.reset()
      })
      .then(error =>{
        console.log(error)
      })
  };

  const handelGoogleSigin = () =>{
    signinWithGoogle()
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mb-4 ml-8">
            {" "}
            <Link to="/register">
              <button className="label-text-alt link link-hover">
                New Account Register
              </button>
            </Link>
          </p>
       
        <div>
        <button onClick={handelGoogleSigin} className="btn btn-primary">Google</button>
        </div>
    
        </div>
      </div>
    </div>
  );
};

export default Login;
