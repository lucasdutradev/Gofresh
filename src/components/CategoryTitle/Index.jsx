import { useContext, useState } from "react";
import { ChangeCategoryContext } from "../../Providers/changeCategory";
import { ButtonTittle, ContainerCategoryTitle } from "./style";

const CategoryTitle = () => {
  const { changeCategory } = useContext(ChangeCategoryContext);
  const [classAll, setClassAll] = useState("selected");
  const [classFavorite, setClassFavorite] = useState("notSelected");
  const [classNews, setClassNews] = useState("notSelected");

  const handleSubmit = (data) => {
    changeCategory(data);
    if (data === "all") {
      setClassAll("selected");
      setClassFavorite("notSelected");
      setClassNews("notSelected");
    } else if (data === "favorite") {
      setClassAll("notSelected");
      setClassFavorite("selected");
      setClassNews("notSelected");
    } else if (data === "news") {
      setClassAll("notSelected");
      setClassFavorite("notSelected");
      setClassNews("selected");
    }
  };

  return (
    <ContainerCategoryTitle>
      <ButtonTittle className={classAll} onClick={() => handleSubmit("all")}>
        Todos
      </ButtonTittle>
      <ButtonTittle
        className={classFavorite}
        onClick={() => handleSubmit("favorite")}
      >
        Favoritos
      </ButtonTittle>
      <ButtonTittle className={classNews} onClick={() => handleSubmit("news")}>
        Novidades
      </ButtonTittle>
    </ContainerCategoryTitle>
  );
};

export default CategoryTitle;
