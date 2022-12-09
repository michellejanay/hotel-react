import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
    .then((response) => response.json())
    .then((data) => setLoading(data))
  })

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    let filtered = bookings.filter(
      ({ firstName, surname }) =>
        firstName.includes(searchVal) || surname.includes(searchVal)
    );
    setBookings(filtered);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );

  // return (
  //   <div className="App-content">
  //     <div className="container">
  //       <Search search={search} />
  //       <SearchResults results={bookings} />
  //     </div>
  //   </div>
  // );
};

export default Bookings;
