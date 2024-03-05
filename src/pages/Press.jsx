import { Link } from "react-router-dom";

import press1 from "../assets/press/press1.png";
import press2 from "../assets/press/press2.png";
import press3 from "../assets/press/press3.png";
import press4 from "../assets/press/press4.png";

import "../styles/pages/Press.css";

const Press = () => {
  return (
    <ul className="press__list container">
      <li className="press__list--item">
        <Link to="#">
          <img src={press1} alt={press1} />
        </Link>
      </li>
      <li className="press__list--item">
        <Link to="#">
          <img src={press2} alt={press2} />
        </Link>
      </li>
      <li className="press__list--item">
        <Link to="#">
          <img src={press3} alt={press3} />
        </Link>
      </li>
      <li className="press__list--item">
        <Link to="#">
          <img src={press4} alt={press4} />
        </Link>
      </li>
    </ul>
  );
};

export default Press;
