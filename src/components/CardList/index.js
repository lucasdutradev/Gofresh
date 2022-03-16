import RatingIcon from "../RatingIcon";
import {
  ContainerCardList,
  ImageCard,
  RatingStar,
  ContainerInformation,
  TitleName,
  DescriptionCard,
} from "./styles";

const CardList = ({ data }) => {
  const rating = data.id;

  return (
    <ContainerCardList>
      <ImageCard src={data.image} alt={data.name} />
      <ContainerInformation>
        <RatingStar>
          {[1, 2, 3, 4, 5].map((index) => {
            return <RatingIcon key={index} index={index} rating={rating} />;
          })}
        </RatingStar>
        <TitleName>{data.name}</TitleName>
        <DescriptionCard>{data.specifications}</DescriptionCard>
      </ContainerInformation>
    </ContainerCardList>
  );
};

export default CardList;
