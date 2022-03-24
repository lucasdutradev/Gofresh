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

const CardList = ({ data, negative }) => {
  const rating = data.note;
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <ContainerCardList>
      {data.type && (
        <span className="titleImg" isFavor={data.type === "Favoritos"}>
          {console.log(data.type === "Favoritos")}
          {data.type}
        </span>
      )}
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
          {negative ? (
            <ButtonAdd onClick={() => removeFromCart(data)}>-</ButtonAdd>
          ) : (
            <ButtonAdd onClick={() => addToCart(data)}>+</ButtonAdd>
          )}
        </ContainerTitleRatingButton>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContainerInformation>
    </ContainerCardList>
  );
};

export default CardList;
