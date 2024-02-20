import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [visitor, setVisitor] = useState(0);
  const [gdprVisible, setGdprVisible] = useState(true);
  const randomNumber = Math.floor(Math.random() * 1000);
  const userId = localStorage.getItem("userId");
  const rejected = localStorage.getItem("rejected");
  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);
  let handleClick1 = () => {};
  let handleClick2 = () => {};
  if (!rejected) {
  
    handleClick1 = () => {
      console.log({
        userId,
        event: "create-account-clicked",
        cta: "variantA",
        location: "signUpPage",
      });
    };
    handleClick2 = () => {
      localStorage.getItem("userId");
      console.log({
        userId,
        event: "create-account-clicked",
        cta: "variantB",
        location: "signUpPage",
      });
    };
  }

  const handleRemove = () => {
    setGdprVisible(false);
  };
  const handleAccept = () => {
    localStorage.clear();
    handleRemove();
    localStorage.setItem("userId", randomNumber.toString());
  };
  const handleReject = () => {
    localStorage.clear();
    localStorage.setItem("rejected", setVisitor());

    handleRemove();
  };
  return (
    <>
      <div className="main">
        <div className="logo">
          <img src="logo.png" alt="logo" className="logo" />
        </div>
        <div className="main-sect">
          <h1>1000+ Users</h1>
          <h2>Join today.</h2>
          <button className="google">Sign up with Google</button>
          <p style={{ marginLeft: "110px" }}>or</p>
          {visitor === 0 ? (
            <button className="create-account button-A" onClick={handleClick1}>
              Create account
            </button>
          ) : (
            <button className="signIn button-B" onClick={handleClick2}>
              Create account
            </button>
          )}

          <div className="sect2">
            <h3>Already have an account?</h3>

            <button className="signIn">Sign in</button>
            <p className="terms">
              By signing up, you agree to the Terms of Service and <br />
              Privacy Policy, including <a href="">Cookie Use.</a>
            </p>
          </div>
        </div>
      </div>
      {gdprVisible && (
        <div className="gdpr">
          <div className="cookies">
            <h4>Did someone say ... cookies?</h4>
            <p>
              S and its partners use cookies to provide you with a better, safer
              and faster service and to support our business. Some cookies are
              necessary to use our services, improve our services, and make sure
              they work properly.
            </p>
          </div>
          <div className="buttons" style={{ marginTop: "5px" }}>
            <button onClick={handleAccept}>Accept all cookies</button>
            <button onClick={handleReject}>Refuse non-essential cookies</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
