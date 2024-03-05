import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/components/navbar/NavLinks.css";

const NavLinks = () => {
  const location = useLocation();

  const links = [
    { name: "О нас", path: "/aboutus" },
    {
      name: "Магазин",
      sub: [
        { name: "балаклавы", path: "/store/balaklavas" },
        {
          name: "комплекты",
          path: "/store/collections",
          sub: [
            { name: "Балаклава и шарф", path: "/store/kits/balaklava-scarf" },
            { name: "Четверки и двойки", path: "/store/kits/quads-doubles" },
          ],
        },
        {
          name: "Шарфы и палантины",
          path: "/store/scarves-shawls",
          sub: [
            { name: "Шелк", path: "/store/scarves-shawls/silk" },
            { name: "Трикотаж", path: "/store/scarves-shawls/knitwear" },
          ],
        },
        {
          name: "Коллекции",
          path: "/store/collections",
          sub: [
            {
              name: "Basic, Лонгслив базовый с шарфом",
              path: "/store/collections/basic-long-scarf",
            },
            {
              name: "Knitted skirt with elastic band",
              path: "/store/collections/skirt",
            },
            {
              name: "Платье базовое трикотажное",
              path: "/store/collections/dress",
            },
          ],
        },
        { name: "Рубашки", path: "/store/shirts" },
        { name: "Юбки", path: "/store/skirts" },
        { name: "Платья", path: "/store/dresses" },
        {
          name: "Аксессуары и украшения",
          path: "/store/accessories",
          sub: [
            {
              name: "Диадема из бисера",
              path: "/store/accessories/beaded-diadem",
            },
            {
              name: "Бандо из бисера",
              path: "/store/accessories/beaded-bando",
            },
            {
              name: "Шапочка из бисера",
              path: "/store/accessories/beaded-cap",
            },
            { name: "Шелковый цветок", path: "/store/accessories/silk-flower" },
          ],
        },
      ],
    },
    { name: "Lookbook", path: "/lookbook" },
    { name: "блог", path: "/blog" },
    { name: "Контакты", path: "/contacts" },
  ];

  const isActive = (linkPath) => {
    return location.pathname === linkPath ? "active" : "";
  };

  const [showSubmenu, setShowSubmenu] = useState(null);

  const toggleSub = (index) => {
    if (links[index].sub) {
      setShowSubmenu(showSubmenu === index ? null : index);
    }
  };

  const renderSub = (subNav) => {
    return (
      <ul>
        {subNav.map((subLink, i) => (
          <li key={i}>
            <Link to={subLink.path}>{subLink.name}</Link>
            {subLink.sub && renderSub(subLink.sub)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ul className="navLinks__list">
      {links.map((link, i) => (
        <li
          className={`navLinks__list--item ${isActive(link.path)}`}
          key={i}
          onClick={() => toggleSub(i)}
        >
          <Link to={link.path}>{link.name}</Link>
          {link.sub && showSubmenu === i && renderSub(link.sub)}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
