const CardList = ({ data }) => {
  return (
    <div className="containeirCardList">
      <img src={data.image} alt={data.name} />
      <div className="ratingStars">{data.id}</div>
      <h3 className="titleName">{data.name}</h3>
      <p className="descriptionCard">{data.specifications}</p>
    </div>
  );
};

export default CardList;
