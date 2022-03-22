import RatingIcon from "../RatingIcon";
import {
  ContainerCardList,
  ImageCard,
  RatingStar,
  ContainerInformation,
  TitleName,
  DescriptionCard,
  ContainerTitleRatingButton,
  ContainerTitleRating,
  ButtonAdd,
} from "./styles";
import { CartContext } from "../../Providers/cart";
import { useContext } from "react";

const CardList = ({ data }) => {
  const rating = data.note;
  const { addToCart } = useContext(CartContext);

  const HandleClickAdd = (item) => {
    addToCart(item);
  };

  return (
    <ContainerCardList>
      <ImageCard src={data.img} alt={data.name} />
      <ContainerInformation>
        <ContainerTitleRatingButton>
          <ContainerTitleRating>
            <RatingStar>
              {[1, 2, 3, 4, 5].map((index) => (
                <RatingIcon key={index} index={index} rating={rating} />
              ))}
            </RatingStar>
            <TitleName>{data.name}</TitleName>
          </ContainerTitleRating>
          <ButtonAdd onClick={() => HandleClickAdd(data)}>+</ButtonAdd>
        </ContainerTitleRatingButton>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContainerInformation>
    </ContainerCardList>
  );
};

export default CardList;
