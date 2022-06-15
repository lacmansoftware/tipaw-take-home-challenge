import { Link } from "react-router-dom";
import Main from "./pages/Main";

export default function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  );
}
