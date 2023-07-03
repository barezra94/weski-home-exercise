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

const siteNames = [
  {
    id: 1,
    name: "Val Thorens",
  },
  {
    id: 2,
    name: "Courchevel",
  },
  {
    id: 3,
    name: "Tignes",
  },
  {
    id: 4,
    name: "La Plagne",
  },
  {
    id: 5,
    name: "Chamonix",
  },
  {
    id: 6,
    name: "Les Menuires",
  },
  {
    id: 7,
    name: "L'alpes D'huez",
  },
  {
    id: 8,
    name: "Les Deux Alpes",
  },
];

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
        <FormControl style={{ display: "flex", flexDirection: "row" }}>
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
            }}
          >
            {siteNames.map((site) => (
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
            style={{ marginLeft: 20, marginRight: 20, width: 132 }}
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
            style={{ marginLeft: 20, marginRight: 20, width: 132 }}
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
        >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
