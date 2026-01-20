// src/components/common/Header.tsx
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#282c34", color: "white" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/login" style={{ color: "white" }}>Login</Link>
        <Link to="/battle" style={{ color: "white" }}>BattleScreen</Link>
      </nav>
    </header>
  );
}

export default Header;
