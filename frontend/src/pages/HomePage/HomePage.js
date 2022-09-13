import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/user_info/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUserInfo(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchUserInfo();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/user_info">Update Your Information</Link>

      {userInfo &&
        userInfo.map((userInfo) => (
          <p key={userInfo.id}>
            {userInfo.schedule} {userInfo.materials_watchlist}
          </p>
        ))}
    </div>
  );
};

export default HomePage;
