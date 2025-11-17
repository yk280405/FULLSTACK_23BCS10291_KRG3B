import Header from "./Header";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";

function App() {
  const username = "Yogesh";

  return (
    <div>
      <Header username={username} />
    </div>
  );
}

export default App;
