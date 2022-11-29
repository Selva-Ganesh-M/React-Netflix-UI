import "./SignIn.scss";

const SignIn = ({
  emailRef,
  passwordRef,
  handleEmailSubmission,
  handlePasswordSubmission,
  email,
}) => {
  return (
    <>
      <div className="signin">
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch?
            <br /> Enter your email to create or restart your membership.
          </p>
          {!email ? (
            <div className="input">
              <input ref={emailRef} type="email" placeholder="email address" />
              <button
                onClick={handleEmailSubmission}
                className="registerButton"
              >
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="password" ref={passwordRef} placeholder="password" />
              <button
                onClick={handlePasswordSubmission}
                className="registerButton"
              >
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
