import { useState } from "react";

import style from "./index.module.scss";

const MenuBar = () => {
  const [active, setActive] = useState(1);
  const menuBar = [
    {
      id: 1,
      title: "Пицца",
    },
    {
      id: 2,
      title: "Паста",
    },
    {
      id: 3,
      title: "Закуски",
    },
    {
      id: 4,
      title: "Синнамон-роллы",
    },
    {
      id: 5,
      title: "Напитки",
    },
    {
      id: 6,
      title: "Гарниры",
    },
    {
      id: 7,
      title: "Соус",
    },
    {
      id: 8,
      title: "Салаты",
    },
    {
      id: 9,
      title: "Еще",
    },
  ];
  return (
    <div className={style["menubar"]}>
      <div className="container">
        <ul className={style["menubar__list"]}>
          {menuBar.map((menu) => (
            <li key={menu.id} className={`${style["menubar__item"]} ${active === menu.id && style["menubar__item_active"]}`} onClick={() => setActive(menu.id)}>
              {menu.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
