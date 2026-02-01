import { useState } from "react";
import SavedLogins from "./Savedlogins";
import type { SavedUser } from "./Savedlogins"
import "./Login.css";

// Initial hardcoded saved users (until Clerk implementation in Sprint 5)
const INITIAL_SAVED_USERS: SavedUser[] = [
  { id: "1", username: "SpookyWarrior", email: "warrior@haunted.com" },
  { id: "2", username: "ShadowMage", email: "mage@darkness.com" },
  { id: "3", username: "PhantomRogue", email: "rogue@phantom.com" },
  { id: "4", username: "GhostKnight", email: "knight@spectral.com" },
];

function Login() {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savedUsers, setSavedUsers] = useState<SavedUser[]>(INITIAL_SAVED_USERS);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSavedUserSelect = (selectedUsername: string, selectedEmail: string) => {
    setUsername(selectedUsername);
    setEmail(selectedEmail);
  };

  const handleDeleteUser = (userId: string) => {
    setSavedUsers(prev => prev.filter(user => user.id !== userId));
    setSuccessMessage("User removed from saved logins");
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signup) {
      // Check if user already exists
      const userExists = savedUsers.some(
        user => user.username.toLowerCase() === username.toLowerCase() || 
                user.email.toLowerCase() === email.toLowerCase()
      );

      if (userExists) {
        setSuccessMessage("⚠️ User with this username or email already exists!");
        setTimeout(() => setSuccessMessage(""), 3000);
        return;
      }

      // Add new user to saved logins
      const newUser: SavedUser = {
        id: Date.now().toString(),
        username,
        email,
      };

      setSavedUsers(prev => [...prev, newUser]);
      
      // Show success message
      setSuccessMessage("✨ Account created successfully! Switch to Login to use it.");
      
      // Clear form and reset after 2 seconds
      setTimeout(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setSuccessMessage("");
      }, 2000);
      
    } else {
      // Login logic (placeholder for Sprint 5 Clerk integration)
      const userExists = savedUsers.find(
        user => user.username.toLowerCase() === username.toLowerCase() && 
                user.email.toLowerCase() === email.toLowerCase()
      );

      if (userExists) {
        setSuccessMessage("✅ Login successful!");
      } else {
        setSuccessMessage("❌ Invalid credentials!");
      }

      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleToggleMode = () => {
    setSignup(!signup);
    setSuccessMessage("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>{signup ? "Sign Up" : "Login"}</h2>
      </div>

      {successMessage && (
        <div className={`success-message ${successMessage.includes('❌') || successMessage.includes('⚠️') ? 'error' : ''}`}>
          {successMessage}
        </div>
      )}

      {!signup && (
        <SavedLogins 
          savedUsers={savedUsers} 
          onSelectUser={handleSavedUserSelect}
          onDeleteUser={handleDeleteUser}
        />
      )}

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{signup ? "Sign Up" : "Login"}</button>
      </form>

      <p className="toggle-text">
        {signup ? "Already have an account?" : "Need an account?"}{" "}
        <button type="button" onClick={handleToggleMode}>
          {signup ? "Login" : "Sign Up"}
        </button>
      </p>

      {!signup && savedUsers.length > 4 && (
        <p className="user-count">
          {savedUsers.length} users registered
        </p>
      )}
    </div>
  );
}

export default Login;