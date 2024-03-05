import { Link } from "react-router-dom";

import about1 from "../assets/aboutus/Rectangle1.png";
import about2 from "../assets/aboutus/Rectangle2.png";
import about3 from "../assets/aboutus/Rectangle3.png";
import about4 from "../assets/aboutus/Rectangle4.png";

import "../styles/pages/AboutUs.css";

const AboutUs = () => {
  return (
    <ul className="aboutus__list container">
      <li className="aboutus__list--item">
        <Link to="#">
          <img src={about1} alt="about" />
          <p>
            <span>annurclothes</span>  - российский бренд, позиционирующий свой взгляд на
            культуру потребления и моральность женского облика.
          </p>
        </Link>
      </li>
      <li className="aboutus__list--item">
        <Link to="#">
          <img src={about2} alt="about" />
          <p>
            Мы ценим труд наших работников, поддерживаем хорошие рабочие
            условия, заботимся о применении экологичных тканей и упаковки.
          </p>
        </Link>
      </li>
      <li className="aboutus__list--item">
        <Link to="#">
          <img src={about3} alt="about" />
          <p>
            Чтим этическую сторону женского костюма, в нашей линейке нет
            изделий, откровенного дизайна.
          </p>
        </Link>
      </li>
      <li className="aboutus__list--item">
        <Link to="#">
          <img src={about4} alt="about" />
          <p>
            Это качественная экологичная одежда, основанная на простых формах,
            свободных конструкциях, вдохновленная традиционным прикладным
            искусством разных народов, одежда уникальная и универсальная, это
            базовый гардероб
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default AboutUs;
