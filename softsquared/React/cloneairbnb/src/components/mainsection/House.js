import React from "react";
import { useNavigate } from "react-router-dom";
import HouseSlide from "./HouseSlide.js";
import HouseInformation from "./HouseInformation.js";
import "./House.css";
function House(props) {
  const picture = props.picture;
  const information = {
    key: props.key,
    housename: props.housename,
    date: props.date,
    distance: props.distance,
    price: props.price,
    star: props.star,
  };
  const navigate = useNavigate();
  const onClickHouseSlide = () => {
    navigate("/OrderHouse", {
      state: {
        housepicture: picture,
        houseinformation: information,
      },
    });
  };

  return (
    <div className="wrap-house">
      <div onClick={onClickHouseSlide}>
        <HouseSlide picture={picture} />
      </div>
      <HouseInformation information={information} />
    </div>
  );
}

export default House;
