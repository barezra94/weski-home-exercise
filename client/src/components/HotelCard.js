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
          <p>Rating: {props.data.HotelInfo.Rating}</p>
        </div>

        <div>
          <div style={{ border: "1px solid #E0E3EB", width: 480 }}></div>
          <p
            style={{
              fontSize: 18,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            ${props.data.PricesInfo.AmountAfterTax}{" "}
            <div style={{ fontSize: 14, color: "#525D7A" }}>/ per person</div>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
