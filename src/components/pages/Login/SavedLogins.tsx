import { useState } from "react";
import "./SavedLogins.css";

// Type definition for saved users
export interface SavedUser {
  id: string;
  username: string;
  email: string;
}

interface SavedLoginsProps {
  savedUsers: SavedUser[];
  onSelectUser: (username: string, email: string) => void;
}

function SavedLogins({ savedUsers, onSelectUser }: SavedLoginsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<SavedUser | null>(null);

  const handleSelectUser = (user: SavedUser) => {
    setSelectedUser(user);
    onSelectUser(user.username, user.email);
    setIsOpen(false);
  };

  if (savedUsers.length === 0) {
    return null;
  }

  return (
    <div className="saved-logins">
      <button
        type="button"
        className="saved-logins-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="saved-logins-icon">👤</span>
        {selectedUser ? selectedUser.username : "Select Saved Login"}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="saved-logins-dropdown">
          {savedUsers.map((user) => (
            <button
              key={user.id}
              type="button"
              className="saved-login-item"
              onClick={() => handleSelectUser(user)}
            >
              <div className="user-avatar">👻</div>
              <div className="user-info">
                <div className="user-name">{user.username}</div>
                <div className="user-email">{user.email}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedLogins;