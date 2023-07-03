import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HotelCard from "./components/HotelCard";

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

  const renderInnerHeader = () => {};

  return (
    <div className="App">
      <NavBar onSubmit={onFilterChanged} />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        accommodations.forEach((accommodation) => {
          return <HotelCard data={accommodation} />;
        })
      )}
    </div>
  );
}

export default App;
