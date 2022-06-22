/* eslint-disable no-nested-ternary */
import React from "react";

interface Props {
  value: number;
  text: string;
}

const Rating: React.FC<Props> = (props) => {
  const { value, text } = props;
  return (
    <div className="rating">
      <i
        className={
          value >= 1
            ? "fas fa-star"
            : value >= 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          value >= 2
            ? "fas fa-star"
            : value >= 1.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          value >= 3
            ? "fas fa-star"
            : value >= 2.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          value >= 4
            ? "fas fa-star"
            : value >= 3.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
      <i
        className={
          value >= 5
            ? "fas fa-star"
            : value >= 4.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      />
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
