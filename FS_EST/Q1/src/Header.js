import Navbar from "./Navbar";   // <--- IMPORTANT

function Header({ username }) {
  return (
    <header>
      <h2>This is Header</h2>
      <Navbar username={username} />
    </header>
  );
}

export default Header;
