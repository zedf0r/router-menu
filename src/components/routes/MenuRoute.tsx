import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav className="menu">
        <ul className="menu__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "menu__list__item menu__list__item-active"
                  : "menu__list__item"
              }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/drift"
              className={({ isActive }) =>
                isActive
                  ? "menu__list__item menu__list__item-active"
                  : "menu__list__item"
              }
            >
              Дрифт-такси
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeattack"
              className={({ isActive }) =>
                isActive
                  ? "menu__list__item menu__list__item-active"
                  : "menu__list__item"
              }
            >
              Time Attack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forza"
              className={({ isActive }) =>
                isActive
                  ? "menu__list__item menu__list__item-active"
                  : "menu__list__item"
              }
            >
              Forza Karting
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
