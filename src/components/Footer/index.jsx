import Logo from "assets/images/logo.svg";

import style from "./index.module.scss";
import { FacebookIcon, InstagramIcon, TelegramIcon } from "assets/icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style["footer-top"]}>
          <a href="/" className={style["footer__logo-link"]}>
            <img className={style["footer__logo-img"]} src={Logo} alt="main logo" width={"65px"} height={"20px"} />
          </a>
          <nav className={style["footer-nav"]}>
            <ul className={style["footer-nav__list"]}>
              <li className={style["footer-nav__item"]}>Филиалы</li>
              <li className={style["footer-nav__item"]}>О нас</li>
              <li className={style["footer-nav__item"]}>Контакты</li>
            </ul>
          </nav>
          <button></button>
        </div>
        <div className={style["footer-bottom"]}>
          <p className={style["footer-bottom__text"]}>©Udevs 2020 - 2022 All rights reserved</p>
          <ul className={style["footer-bottom__social-list"]}>
            <li className={style["footer-bottom__social-item"]}>
              <a href="/" className={style["footer-bottom__social-item"]}>
                <InstagramIcon />
              </a>
            </li>
            <li className={style["footer-bottom__social-item"]}>
              <a href="/" className={style["footer-bottom__social-item"]}>
                <FacebookIcon />
              </a>
            </li>
            <li className={style["footer-bottom__social-item"]}>
              <a href="/" className={style["footer-bottom__social-item"]}>
                <TelegramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
