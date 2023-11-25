import style from "./index.module.scss";

const Food = ({ title, foods = [] }) => {
  return (
    <section className={style.food}>
      <div className="container">
        <h2 className={style["food__title"]}>{title}</h2>
        <ul className={style["food__list"]}>
          {foods.map((food) => (
            <li key={food.id} className={`${style["food__item"]} ${food.disabled ? style["food__item-disabled"] : ""}`}>
              <img className={style["food__item-img"]} src={food.img} alt={food.title} />
              <div className={style["food__item-info"]}>
                <h3 className={style["food__item-title"]}>{food.title}</h3>
                <p className={style["food__item-text"]}>{food.text}</p>
                <div className={style["food__item-footer"]}>
                  <p>
                    <span>{food.price}</span>сум
                  </p>
                  <button className={`${style["food__item-add-btn"]} ${food.disabled ? style["food__item-add-disabled"] : ""}`}>{food.disabled ? "Недоступно" : "Добавить"}</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Food;
