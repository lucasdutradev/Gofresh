import RatingIcon from "../RatingIcon";
import {
  ContainerCardList,
  ImageCard,
  RatingStar,
  ContainerInformation,
  TitleName,
  DescriptionCard,
} from "./styles";
// import { CartContext } from "../../Providers/cart";
// import { useContext } from "react";

const CardList = ({ data, isCart = true }) => {
  // const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <ContainerCardList>
      <ImageCard src={data.img} alt={data.name} />
      <ContainerInformation>
        <RatingStar>
          {[1, 2, 3, 4, 5].map((index) => (
            <RatingIcon key={index} index={index} rating={data.note} />
          ))}
        </RatingStar>
        {/* {isCart ? (
          <button onClick={() => addToCart()}>Adicinar</button>
        ) : (
          <button onClick={() => removeFromCart()}>Remover</button>
        )} */}
        <TitleName>{data.name}</TitleName>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContainerInformation>
    </ContainerCardList>
  );
};

export default CardList;
