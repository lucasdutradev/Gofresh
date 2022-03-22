import CategoryTitle from "../../components/CategoryTitle/Index";
import ListProducts from "../../components/ListProducts";
import Search from "../../components/Search";
import Header from "../../components/Header";
import { ContainerMenu, BarSeparation } from "./style";

const Menu = () => {
  return (
    <ContainerMenu>
      <Header />
      <CategoryTitle />
      <BarSeparation />
      <Search />
      <ListProducts />
    </ContainerMenu>
  );
};

export default Menu;
