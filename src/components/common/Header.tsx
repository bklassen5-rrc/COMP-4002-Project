import { Link } from "react-router-dom";
import UserAvatar from "./usercontext/Useravatar";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#282c34", color: "white", display: "flex", alignItems: "center" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
        <Link to="/battle" style={{ color: "white" }}>BattleScreen</Link>
      </nav>
      <div style={{ marginLeft: "auto" }}>
        <UserAvatar />
      </div>
    </header>
  );
}

export default Header;
