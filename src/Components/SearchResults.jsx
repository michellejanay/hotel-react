import React, { useState } from "react";
import moment from "moment/moment";



const SearchResults = (props) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const handleClick = (ind) => {
    return selectedIndex === ind
      ? setSelectedIndex(null)
      : setSelectedIndex(ind);
  };

  const [titleRow, setTitleRow] = useState(true);
  const handleClick0 = () => setTitleRow(!titleRow);

  return (
    <div className="Search-Results">
      <table>
        <thead>
          <tr 
          onClick={()=>handleClick0}
          className={titleRow ? "" : "tClicked"}>
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
              key={info.id}
              onClick={() => handleClick(i)}
              className={selectedIndex === i ? "clicked" : ""}
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
