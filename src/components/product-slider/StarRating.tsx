interface RatingProp {
  rating: number;
}

const StarRating = ({ rating }: RatingProp) => {
  const percentage = (rating / 5) * 100;

  return (
    <div
      dir="ltr"
      className="star-rating"
      style={{ position: "relative", fontSize: "24px", color: "#d3d3d3" }}
    >
      <div
        className="filled-stars"
        style={{
          color: "#f39c12",
          position: "absolute",
          top: 0,
          left: 0,
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: `${percentage}%`,
        }}
      >
        ★★★★★
      </div>
      <div>★★★★★</div>
    </div>
  );
};

export default StarRating;
