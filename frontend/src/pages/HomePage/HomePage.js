import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm';

let initialValues = {
  phone_number: '',
};

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postUserInfo);

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

  async function postUserInfo(){
    try {
        let response = await axios.post("http://127.0.0.1:8000/user_info/", formData, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        navigate("/")
    } catch (error) {
        console.log(error.message)
    }
  }
  
  return (
      <div className="container">
        <h1>Welcome {user.username}</h1>
            <form className="form" onSubmit={handleSubmit}>
                  <label>
                    Phone Number:{" "}
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                    />
                </label>
                <button>Done</button>
            </form>
        </div>
  );
};

export default HomePage;
