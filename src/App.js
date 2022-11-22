import React from "react";
import Header from "./Components/Header";

import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./Components/TouristInfoCards";
import Footer from "./Components/Footer";
import Restaurant from "./Restaurant";


const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
