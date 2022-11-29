import "./SignUpComponent.scss";

const SignUpComponent = ({ setSignUpShow, setEmail, setPassword }) => {
  console.log("entered SignUp");
  return (
    <div className="signup">
      <div className="container">
        <h1>Sign Up</h1>
        <form action="">
          <div className="input-div">
            <label>Email</label>
            <input type="email" placeholder="enter your email here." />
          </div>
          <div className="input-div">
            <label>Password</label>
            <input type="password" placeholder="enter your password here." />
          </div>
          <div className="input-div">
            <label>Confirm Password</label>
            <input type="password" placeholder="enter your password here." />
          </div>
          <button className="btn" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Existing user? wanna
          <span>
            <a href="#" onClick={() => setSignUpShow(false)}>
              {" "}
              Sign In
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpComponent;
