import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname);
  }, [location]);

  return (
    <footer className="footer">
      <ul className="footer__list">
        <li
          className={`footer__list--item ${
            activeLink === "/contacts" && "active"
          }`}
        >
          <Link to="/contacts">связаться с нами</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/deliveryandpayment" && "active"
          }`}
        >
          <Link to="/deliveryandpayment">доставка и оплата</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/refundandexchange" && "active"
          }`}
        >
          <Link to="/refundandexchange">Возврат и обмен</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/press" && "active"
          }`}
        >
          <Link to="/press">Пресса</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/feedbacks" && "active"
          }`}
        >
          <Link to="/feedbacks">отзывы</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/privacypolicy" && "active"
          }`}
        >
          <Link to="/privacypolicy">Политика конфиденциальности</Link>
        </li>
        <li
          className={`footer__list--item ${
            activeLink === "/termsandconditions" && "active"
          }`}
        >
          <Link to="/termsandconditions">ПРАВИЛА И УСЛОВИЯ</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
