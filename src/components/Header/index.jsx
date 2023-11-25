import { ArrowDown, BasketIcon, FlagOfRussia, LocationIcon } from "../../assets/icons";
import Logo from "../../assets/images/logo.svg";
import burgerMenu from "assets/images/menu.png";
import close from "assets/images/close-btn.png";

import style from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="container">
        <header className={`${style["site-header"]}`}>
          <div className={style["site-header__left"]}>
            <button className={style["site-header__menu-btn"]} onClick={() => setModalOpen(true)}>
              <img className={style["site-header__menu-img"]} src={burgerMenu} alt="burger menu" />
            </button>
            <a href="/" className={style["site-header__logo"]}>
              <img src={Logo} alt="main logo" width={"65px"} height={"20px"} />
            </a>
            <nav className={style["site-header__nav"]}>
              <ul className={style["site-header__nav_list"]}>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Меню</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Филиалы</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">О нас</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style["site-header__right"]}>
            <div className={style["site-header__location"]}>
              <a href="https://yandex.com/maps/org/evos/235041114448/?ll=69.197406%2C41.279817&z=16.75" target="_blank" rel="noreferrer" className={style["site-header__location-icon"]}>
                <LocationIcon />
              </a>
              <div className={style["site-header__location-info"]}>
                <p className={style["site-header__location-text"]}>Достафка или Заказ с собой</p>
                <a href="https://yandex.com/maps/org/evos/235041114448/?ll=69.197406%2C41.279817&z=16.75" target="_blank" rel="noreferrer" className={style["site-header__location-link"]}>
                  Выберите способ получения
                </a>
              </div>
            </div>
            <button className={style["site-header__basket-btn"]}>
              <BasketIcon />
            </button>
            <button className={style["site-header__language-btn"]}>
              <FlagOfRussia />
              <ArrowDown />
            </button>
            <button className={style["site-header__login"]}>Войти</button>
          </div>
        </header>
      </div>
      {isModalOpen && (
        <div className={style.modal}>
          <div className={style["modal-inner"]}>
            <div className={`${style["site-header__location"]} ${style["modal-inner__location"]}`}>
              <a href="https://yandex.com/maps/org/evos/235041114448/?ll=69.197406%2C41.279817&z=16.75" target="_blank" rel="noreferrer" className={style["site-header__location-icon"]}>
                <LocationIcon />
              </a>
              <div className={style["site-header__location-info"]}>
                <p className={style["site-header__location-text"]}>Достафка или Заказ с собой</p>
                <a href="https://yandex.com/maps/org/evos/235041114448/?ll=69.197406%2C41.279817&z=16.75" target="_blank" rel="noreferrer" className={style["site-header__location-link"]}>
                  Выберите способ получения
                </a>
              </div>
            </div>
            <nav className={`${style["site-header__nav"]} ${style["modal-inner__nav"]}`}>
              <ul className={`${style["site-header__nav_list"]} ${style["modal-inner__nav_list"]}`}>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Меню</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Филиалы</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">О нас</a>
                </li>
                <li className={style["site-header__nav_list-item"]}>
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
          <button className={style["modal-close-btn"]} onClick={() => setModalOpen(false)}>
            <img src={close} alt="close btn" />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
