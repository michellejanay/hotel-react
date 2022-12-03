import React from "react";

const Header = () => (
  <div className="Header-div">
    <header className="App-header">CYF Hotel</header>
    <img
      src={require(`../images/logo.jpg`)}
      alt="Hotel"
      className="Logo"
    />
  </div>
);

export default Header;
