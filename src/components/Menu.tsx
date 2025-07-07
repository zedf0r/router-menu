import { NavLink } from "react-router-dom";

export const Menu = () => {
  const menuLinks = [
    {
      id: 1,
      link: "/",
      title: "Главная",
    },
    {
      id: 2,
      link: "/drift",
      title: "Дрифт-такси",
    },
    {
      id: 3,
      link: "/timeattack",
      title: "Time Attack",
    },
    {
      id: 4,
      link: "/forza",
      title: "Forza Karting",
    },
  ];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuLinks.map(({ id, link, title }) => {
          return (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "menu__list__item menu__list__item-active"
                  : "menu__list__item"
              }
            >
              {title}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};
