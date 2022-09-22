import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
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
      <h1>Welcome {user.username}</h1>
    </div>
  );
};

export default HomePage;
