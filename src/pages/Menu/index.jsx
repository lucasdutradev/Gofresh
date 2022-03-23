import { Link } from "react-router-dom";
import CartFixed from "../../components/CartFixed";
import CategoryTitle from "../../components/CategoryTitle/Index";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import Search from "../../components/Search";
import { ContainerMenu, BarSeparation } from "./style";

const Menu = () => {
  return (
    <>
      <Header />
      <ContainerMenu>
        <CategoryTitle />
        <BarSeparation />
        <Search />
        <ListProducts />
        <Link to="/cart">
          <CartFixed />
        </Link>
      </ContainerMenu>
    </>
  );
};

export default Menu;
