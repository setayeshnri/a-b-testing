
import './App.css';

function App() {
  return (
    <>
      <div className="main">
        <div className="logo">
          <img src="logo.png" alt="logo" className='logo'/>
        </div>
        <div className="main-sect">
          <h1>1000+ Users</h1>
          <h2>Join today.</h2>
          <button className="google">Sign up with Google</button>
          <p style={{ marginLeft: "110px" }}>or</p>
          <button className="create-account">Create account</button>
          <div className="sect2">
            <h3>Already have an account?</h3>
            <button className="signIn">Sign in</button>
            <p className="terms">
              By signing up, you agree to the Terms of Service and <br />Privacy
              Policy, including Cookie Use.
            </p>
          </div>
        </div>
      </div>
    </>
  );
   
  
}

export default App;
