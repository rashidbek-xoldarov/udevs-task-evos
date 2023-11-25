import Banner from "components/Banner";
import Header from "../../components/Header";
import MenuBar from "components/MenuBar";
import Food from "components/Food";
import { burger, clubburger, pizza, sendwichburger } from "utils/contants";
import Footer from "components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <Banner />
        <MenuBar />
        <Food title={"Лаваш"} foods={pizza} />
        <Food title={"Бургеры"} foods={burger} />
        <Food title={"Клаб-Сэндвич"} foods={clubburger} />
        <Food title={"Шаурма"} foods={sendwichburger} />
        <MenuBar />
      </main>
      <Footer />
    </>
  );
};

export default Main;
