import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Loading...")

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error("Oops! Something went wrong");
      })
      .then((data) => {
        setLoading(true);
        setBookings(data);
      })
      .catch(error => {
        console.log(error);
        setError("Oops! Something went wrong")
      });
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
        {loading ? <SearchResults results={bookings} /> : <p>{error}</p>}
      </div>
    </div>
  );

};

export default Bookings;
