import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = (props) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        let starComponent;

        if (i < props.rating) {
          starComponent = <AiFillStar fontSize="15px" />;
        } else {
          starComponent = <AiOutlineStar fontSize="15px" />;
        }

        return (
          <span key={i} onClick={() => props.settingRate(i + 1)} style={props.style}>
            {starComponent}
          </span>
        );
      })}
    </>
  );
};
export default Rating;
