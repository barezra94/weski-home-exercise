import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HotelCard from "./components/HotelCard";

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

function App() {
  const [accommodations, setAccommodations] = useState([]);
  const [queryParams, setQueryParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const convertToDateString = (d) => {
    return (
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + d.getDate()).slice(-2) +
      "/" +
      d.getFullYear()
    );
  };

  const onFilterChanged = (queryParams) => {
    setIsLoading(true);
    setQueryParams(queryParams);
    fetch(
      `/api/getHotelsByCriteria?siteId=${
        queryParams.siteId
      }&fromDate=${convertToDateString(
        queryParams.fromDate
      )}&toDate=${convertToDateString(queryParams.toDate)}&groupSize=${
        queryParams.groupSize
      }`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => setAccommodations(data.accommodations));
    setIsLoading(false);
  };

  const renderInnerHeader = () => {
    if (accommodations.length === 0) {
      return <></>;
    }
    return (
      <div>
        <p>Select your ski trip</p>
        <p>
          {accommodations.length} ski trips options ·{" "}
          {siteNames.find((site) => site.id === queryParams.siteId).name} ·{" "}
          {queryParams.fromDate.toLocaleString().split(",")[0]} -{" "}
          {queryParams.toDate.toLocaleString().split(",")[0]} ·{" "}
          {queryParams.groupSize} people
        </p>
      </div>
    );
  };

  return (
    <div className="App">
      <NavBar onSubmit={onFilterChanged} siteNames={siteNames} />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {renderInnerHeader()}
          {accommodations.map((accommodation) => {
            return <HotelCard data={accommodation} />;
          })}
        </>
      )}
    </div>
  );
}

export default App;
