import React from "react";
import {
  AppBar,
  FormControl,
  Toolbar,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  useThemeProps,
  Card,
} from "@mui/material";

const HotelCard = ({ data }) => {
  console.log(data);
  return <Card>{data.HotelName}</Card>;
};

export default HotelCard;
