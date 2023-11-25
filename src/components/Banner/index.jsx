import banner from "assets/images/banner.png";

import style from "./index.module.scss";

const Banner = () => {
  return (
    <div className={`${style.banner}`}>
      <div className="container">
        <img className={style["banner__img"]} src={banner} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
