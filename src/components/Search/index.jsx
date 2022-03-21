import { useContext, useState } from "react";
import { ListContext } from "../../Providers/list";
import { CountPageContext } from "../../Providers/countPage";
import {
  SearchIcon,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
} from "./style";
import Icon from "../../images/search.png";

const Search = () => {
  const { list, setSearchList } = useContext(ListContext);
  const { setCountPage } = useContext(CountPageContext);
  const [input, setInput] = useState("");

  const showProducts = (data) => {
    data = data.toLowerCase();
    if (data.length === 0) {
      setSearchList([]);
      setCountPage(1);
    } else {
      setCountPage(1);
      setSearchList(
        list.filter((item) => {
          return (
            item.category.toLowerCase().includes(data) ||
            item.name.toLowerCase().includes(data) ||
            item.description.toLowerCase().includes(data) ||
            item.ingredients.map((str) => str.toLowerCase()).includes(data)
          );
        })
      );
    }
  };

  return (
    <ContainerSearch>
      <InputSearch
        type="text"
        placeholder="Pesquisar..."
        onChange={(event) => setInput(event.target.value)}
      />
      <ButtonSearch onClick={() => showProducts(input)}>
        <SearchIcon src={Icon} alt="buscar" />
      </ButtonSearch>
    </ContainerSearch>
  );
};
export default Search;
