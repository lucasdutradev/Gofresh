import RatingIcon from "../RatingIcon";

const CardList = ({ data }) => {
  const rating = data.id;

  return (
    <div className="containeirCardList">
      <img src={data.image} alt={data.name} />
      {[1, 2, 3, 4, 5].map((index) => {
        return <RatingIcon index={index} rating={rating} />;
      })}
      <h3 className="titleName">{data.name}</h3>
      <p className="descriptionCard">{data.specifications}</p>
    </div>
  );
};

export default CardList;
