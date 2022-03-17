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
  const rating = data.note;

  return (
    <ContainerCardList>
      <ImageCard src={data.img} alt={data.name} />
      <ContainerInformation>
        <RatingStar>
          {[1, 2, 3, 4, 5].map((index) => (
            <RatingIcon key={index} index={index} rating={rating} />
          ))}
        </RatingStar>
        <TitleName>{data.name}</TitleName>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContainerInformation>
    </ContainerCardList>
  );
};

export default CardList;
