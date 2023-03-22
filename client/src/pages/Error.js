import { Link } from "react-router-dom";
import "../styles/error.css"

function Error() {
  return (
    <div className="App">
      <h1>
        ERROR PAGE !
      </h1>
      <Link to="/">Revenir à la page d'accueil</Link>
    </div>
  );
}

export default Error;