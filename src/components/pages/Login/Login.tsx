import { useState } from "react";
import "./Login.css";

function Login() {
  const [signup, setSignup] = useState(false);

  return (
    <div className="login-container">
      <h2>{signup ? "Sign Up" : "Login"}</h2>

      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{signup ? "Sign Up" : "Login"}</button>
      </form>

      <p className="toggle-text">
        {signup ? "Already have an account?" : "Need an account?"}{" "}
        <button type="button" onClick={() => setSignup(!signup)}>{signup ? "Login" : "Sign Up"}</button>
      </p>
    </div>
  );
}

export default Login;
