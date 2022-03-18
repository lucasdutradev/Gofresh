import { useContext, useState } from "react";
import { ListContext } from "../../Providers/list";
import { CountPageContext } from "../../Providers/countPage";
import { SearchIcon } from "./style";

const Search = () => {
  const { list } = useContext(ListContext);
  const { setSliceList, sliceList } = useContext(CountPageContext);
  const [input, setInput] = useState("");

  const showProducts = (data) => {
    let newList = [];
    data = data.toLowerCase();

    if (data.length === 0) {
      setSliceList(sliceList);
    } else {
      setSliceList(
        list.filter((item) => {
          console.log(item);
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
    <div>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => showProducts(input)}>
        <img src="../../images/search.png" alt="buscar" />
      </button>
    </div>
  );
};
export default Search;
