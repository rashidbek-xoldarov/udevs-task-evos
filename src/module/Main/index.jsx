import Banner from "components/Banner";
import Header from "../../components/Header";
import MenuBar from "components/MenuBar";
import Food from "components/Food";
import { burger, pizza } from "utils/contants";
import Footer from "components/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <Banner />
        <MenuBar />
        <Food title={"Lavash"} foods={pizza} />
        <Food title={"Burger"} foods={burger} />
        <MenuBar />
      </main>
      <Footer />
    </>
  );
};

export default Main;
