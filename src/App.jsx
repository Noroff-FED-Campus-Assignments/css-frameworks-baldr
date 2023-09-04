import { Outlet, Link } from "@tanstack/react-router";
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul id="#nav-bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by Julia, Bilal, Haakon, Mo</small>
      </footer>
    </>
  );
}

export default App;
