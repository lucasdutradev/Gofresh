import StarIcon from "../StarIcon";
import { useMemo } from "react";

const RatingIcon = (props) => {
  const { index, rating, hoverRating } = props;

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return "yellow";
    } else if (!hoverRating && rating >= index) {
      return "yellow";
    }
    return "none";
  }, [rating, hoverRating, index]);

  return (
    <div className="cursor-pointer">
      <StarIcon key={index} fill={fill} />
    </div>
  );
};

export default RatingIcon;
