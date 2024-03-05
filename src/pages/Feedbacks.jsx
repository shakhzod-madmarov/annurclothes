import feedback1 from "../assets/feedbacks/Rectangle 322.png";
import feedback2 from "../assets/feedbacks/Rectangle 323.png";
import feedback3 from "../assets/feedbacks/Rectangle 324.png";
import feedback4 from "../assets/feedbacks/Rectangle 325.png";
import feedback5 from "../assets/feedbacks/Rectangle 326.png";
import feedback6 from "../assets/feedbacks/Rectangle 327.png";
import feedback7 from "../assets/feedbacks/Rectangle 328.png";
import feedback8 from "../assets/feedbacks/Rectangle 329.png";

import "../styles/pages/Feedbacks.css";

const Feedbacks = () => {
  const feedbacks = [
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback5,
    feedback6,
    feedback7,
    feedback8,
  ];

  return (
    <ul className="feedbacks__list container">
      {feedbacks.map((feedback, index) => (
        <li className="feedbacks__list--item" key={index}>
          <img src={feedback} alt={`Feedback ${index + 1}`} />
        </li>
      ))}
    </ul>
  );
};

export default Feedbacks;
