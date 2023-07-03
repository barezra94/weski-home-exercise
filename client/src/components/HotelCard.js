import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

const HotelCard = (props) => {
  console.log(props.data);
  return (
    <Card
      style={{
        margin: 20,
        borderRadius: 12,
        width: 900,
        height: 238,
        border: "1px solid #E0E3EB",
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        style={{ width: 380 }}
        src={
          props.data.HotelDescriptiveContent.Images.find((image) =>
            image.hasOwnProperty("MainImage")
          ).URL
        }
      />
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <p>{props.data.HotelName}</p>
          <p>{props.data.HotelInfo.Rating}</p>
          <p>{}</p>
        </div>

        <div
          style={{
            position: "relative",
            bottom: 0,
            right: -300,
          }}
        >
          <p>${props.data.PricesInfo.AmountAfterTax} / per person</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
