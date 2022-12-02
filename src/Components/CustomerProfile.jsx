import React, { useState, useEffect } from "react";

const CustomerProfile = (prop) => {
  const [guest, setGuest] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${prop.profileId}`)
      .then((response) => response.json())
      .then((data) => setGuest(data));
  }, [prop.profileId]);
  return (
    <div>
      <h5>Customer {guest.id} Profile</h5>
      <h6>
        {guest.title} {guest.firstName} {guest.surname}
      </h6>

      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>VIP:</strong> {guest.vip ? "true" : "false"}</p>
      <p><strong>Phone number:</strong> {guest.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
