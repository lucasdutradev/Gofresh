import ListProducts from "../../components/ListProducts";
import Search from "../../components/Search";
import { ContainerMenu, BarSeparation } from "./style";

const Menu = () => {
  return (
    <ContainerMenu>
      <BarSeparation />
      <Search />
      <ListProducts />
    </ContainerMenu>
  );
};

export default Menu;
