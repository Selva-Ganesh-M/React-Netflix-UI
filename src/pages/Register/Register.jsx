import { useEffect, useRef, useState } from "react";
import SignUpComponent from "../../components/SignUp/SignUpComponent";
import SignIn from "../../components/SignIn/SignIn";
import "./Register.scss";

const Register = () => {
  const [signUpShow, setSignUpShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleEmailSubmission = () => {
    setEmail(emailRef.current.value);
  };
  const handlePasswordSubmission = () => {
    setPassword(passwordRef.current.value);
  };
  const handleGoToSignUpPage = () => {
    setEmail("");
    setPassword("");
    setSignUpShow(true);
  };
  useEffect(() => {
    console.log("signUpShow: ", signUpShow);
  }, [signUpShow]);
  return (
    <>
      <div className="register">
        <div className="header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          {!signUpShow ? (
            <button className="signin-btn" onClick={handleGoToSignUpPage}>
              SignUp
            </button>
          ) : null}
        </div>
        {signUpShow ? (
          <>
            <SignUpComponent
              setSignUpShow={setSignUpShow}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </>
        ) : (
          <>
            <SignIn
              email={email}
              emailRef={emailRef}
              passwordRef={passwordRef}
              handleEmailSubmission={handleEmailSubmission}
              handlePasswordSubmission={handlePasswordSubmission}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Register;
