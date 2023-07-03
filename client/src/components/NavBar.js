import React, { useState } from "react";
import {
  AppBar,
  FormControl,
  Toolbar,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NavBar = (props) => {
  const [searchParams, setSearchParams] = useState({
    siteId: undefined,
    fromDate: new Date(),
    toDate: undefined,
    groupSize: undefined,
  });

  return (
    <AppBar
      position="static"
      style={{
        background: "white",
        boxShadow: "none",
        border: "1px solid #E0E3EB",
      }}
    >
      <Toolbar>
        <img src="/logo.png" className="logo" alt="logo" />
        <FormControl
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Select
            placeholder="Select Site..."
            value={searchParams.siteId}
            onChange={(e) => {
              setSearchParams({ ...searchParams, siteId: e.target.value });
            }}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
            style={{
              marginLeft: 20,
              marginRight: 20,
              width: 132,
              fontSize: 16,

              color: "#525D7A",
            }}
          >
            {props.siteNames.map((site) => (
              <MenuItem key={site.id} value={site.id}>
                {site.name}
              </MenuItem>
            ))}
          </Select>
          <Select
            style={{
              marginLeft: 20,
              marginRight: 20,
              width: 132,
              fontSize: 16,

              color: "#525D7A",
            }}
            placeholder="Select Group Size..."
            value={searchParams.groupSize}
            onChange={(e) => {
              setSearchParams({ ...searchParams, groupSize: e.target.value });
            }}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <DatePicker
            showIcon
            style={{
              marginLeft: 20,
              marginRight: 20,
              width: 132,
              fontSize: 16,
              color: "#525D7A",
            }}
            selected={searchParams.fromDate}
            onChange={(date) => {
              setSearchParams({
                ...searchParams,
                fromDate: date,
                toDate: date,
              });
            }}
          />
          <DatePicker
            showIcon
            style={{
              marginLeft: 20,
              marginRight: 20,
              width: 132,
              fontSize: 16,
              color: "#525D7A",
            }}
            selected={searchParams.toDate}
            onChange={(date) => {
              setSearchParams({
                ...searchParams,
                toDate: date,
              });
            }}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={() => props.onSubmit(searchParams)}
          style={{ marginLeft: 20 }}
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
