import UserProfile from "./UserProfile";

function Navbar({ username }) {
  return (
    <nav>
      <h3>This is Navbar</h3>
      <UserProfile username={username} />
    </nav>
  );
}

export default Navbar;     // <--- IMPORTANT
