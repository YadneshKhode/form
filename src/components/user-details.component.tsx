import axios from "axios";
import React, { useState } from "react";

export const UserDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  const profile = {
    first_name: firstName,
    last_name: lastName,
    linkedin_profile: linkedin,
    email_id: email,
    github_profile: github,
  };

  const API =
    "http://a64c892dba98d4cb9963dc50e3d7ed07-161434970.ap-south-1.elb.amazonaws.com/candidates";

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (firstName && lastName && email && linkedin && github) {
      axios
        .post(API, profile)
        .then((response) => console.log(response))
        .catch((error) => {
          alert(
            "Unfortunately we were not able to submit your details please try again" +
              error
          );
        });
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <form action="#">
      <div>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input
              type="text"
              placeholder="Enter your First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input
              type="text"
              placeholder="Enter your Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-box">
            <span className="details">GitHub Url</span>
            <input
              type="url"
              placeholder="Enter your GitHub Url"
              required
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
            />
          </div>
          <div className="input-box">
            <span className="details">LinkedIn Url</span>
            <input
              type="url"
              placeholder="Enter your LinkedIn Url"
              required
              onChange={(e) => setGithub(e.target.value)}
              value={github}
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
};
