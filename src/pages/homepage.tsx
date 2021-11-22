import React from "react";
import { UserDetails } from "../components/user-details.component";

export const Homepage = () => {
  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <UserDetails />
      </div>
    </div>
  );
};
