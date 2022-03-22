import CategoryTitle from "../../components/CategoryTitle/Index";
import ListProducts from "../../components/ListProducts";
import Search from "../../components/Search";
import { ContainerMenu, BarSeparation } from "./style";

const Menu = () => {
  return (
    <ContainerMenu>
      <CategoryTitle />
      <BarSeparation />
      <Search />
      <ListProducts />
    </ContainerMenu>
  );
};

export default Menu;
