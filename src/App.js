import "./App.css";
import { useEffect, useState } from "react";



function App() {
  const [visitor, setVisitor] = useState(0);
  const [gdprVisible, setGdprVisible] = useState(true);
  useEffect(() => {
    const randomizeVisitor = Math.random();
    if (randomizeVisitor > 0.5) {
      setVisitor(1);
    }
  }, []);
  const handleClick1 = () => {
    console.log({
      event: "ctaClick",
      cta: "variantA",
      location: "signUpPage",
    });
  };
  const handleClick2 = () => {
    console.log({
      event: "ctaClick",
      cta: "variantB",
      location: "signUpPage",
    });
  };
  const handleRemove = () => {
   setGdprVisible(false);
  }
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
              Privacy Policy, including Cookie Use.
            </p>
          </div>
        </div>
      </div>
      {gdprVisible &&(
      <div className="gdpr">
        <div className="cookies">
          <h4>Did someone say ... cookies?</h4>
          <p>
            X and its partners use cookies to provide you with a better, safer
            and faster service and to support our business. Some cookies are
            necessary to use our services, improve our services, and make sure
            they work properly.
          </p>
        </div>
        <div className="buttons" style={{ marginTop: "5px" }}>
          <button onClick={handleRemove}>Accept all cookies</button>
          <button onClick={handleRemove}>Refuse non-essential cookies</button>
        </div>
      </div>)}
    </>
  );
}

export default App;
