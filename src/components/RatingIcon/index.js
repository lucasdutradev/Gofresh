import StarIcon from "../StarIcon";
import { useMemo } from "react";
import { StarIndividual } from "./style";

const RatingIcon = ({ index, rating, hoverRating }) => {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);

  return (
    <StarIndividual>
      <StarIcon fill={fill} />
    </StarIndividual>
  );
};

export default RatingIcon;
