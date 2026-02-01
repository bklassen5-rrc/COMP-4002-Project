import { useUser } from "./usercontext";
import "./UserAvatar.css";

function UserAvatar() {
  const { username } = useUser();

  if (!username) {
    return null;
  }

  const firstChar = username.charAt(0).toUpperCase();

  return (
    <div className="user-avatar">
      {firstChar}
    </div>
  );
}

export default UserAvatar;