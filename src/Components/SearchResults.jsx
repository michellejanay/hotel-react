import React, { useState } from "react";
import moment from "moment/moment";

const SearchResults = (props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = (event) =>
    setClicked(
      event.target.classList.contains("clicked")
        ? event.target.classList.remove("clicked")
        : event.target.classList.add("clicked")
    );

  return (
    <div className="Search-Results">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In Date</th>
            <th>Check Out Date</th>
            <th>Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((info, i) => (
            <tr
              key={i}
              onClick={(event) => {
                handleClick(event);
              }}
            >
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.firstName}</td>
              <td>{info.surname}</td>
              <td className="Email-td">{info.email}</td>
              <td>{info.roomId}</td>
              <td>{info.checkInDate}</td>
              <td>{info.checkOutDate}</td>
              <td>
                {moment(info.checkOutDate).diff(
                  moment(info.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
