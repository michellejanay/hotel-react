import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBookings(data))
  }, [bookings]);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    let filtered = bookings.filter(({ firstName, surname }) => firstName === searchVal || surname === searchVal);
    setBookings(filtered)
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
