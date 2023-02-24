import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./AddMaterials.css";

const AddMaterials = (props) => {
  const [user, token] = useAuth();
  const [userMaterials, setUserMaterials] = useState([{}]);
  const [productTotal, setProductTotal] = useState();
  const priceArray = [];

  const allPrices = () => {
    props.userMaterials.map((userMaterial) => {
      priceArray.push(userMaterial.price * 1);
    });
  };

  allPrices();
  console.log(priceArray);

  const materialsPrice = () => {
    const sum = priceArray.reduce(function (a, b) {
      return a + b;
    }, 0);
    setProductTotal(sum);
  };

  useEffect(() => {
    getAllMaterials();
  }, []);

  async function getAllMaterials() {
    const response = await axios.get("http://127.0.0.1:8000/user_info/", {
      headers: { Authorization: "Bearer " + token },
    });
    props.setUserMaterials(response.data);
  }

  async function deleteMaterial(id) {
    await axios
      .delete(`http://127.0.0.1:8000/user_info/${id}/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((result) => getAllMaterials());
  }

  async function deleteAlert(id) {
    let user_input = prompt(
      "Are you sure you want to remove this product from your list? (answer 'yes' or 'no')"
    );
    if (user_input === "yes") {
      deleteMaterial(id);
      getAllMaterials();
    }
  }

  const handleAlert = (event, id) => {
    event.preventDefault();
    deleteAlert(id);
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          materialsPrice();
        }}
      >
        Click for total
      </button>
      <p>Total Price: ${productTotal}</p>
      {props.userMaterials.map((userMaterial) => {
        return (
          <div className="user_materials_container">
            <div className="user_materials">
              <p className="user_materials_card">
                {userMaterial.title} <br />
                Price: ${userMaterial.price} <br />
                Brand: {userMaterial.brand} <br />
                Rating: {userMaterial.rating}/5 <br />
                <a href={userMaterial.link} target="_blank">
                  Link to Product's full page
                </a>{" "}
                <br />
                <button
                  className="delete"
                  onClick={(e) => handleAlert(e, userMaterial.id)}
                >
                  Delete
                </button>
              </p>
            </div>
          </div>
        );
      })}
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMaterials;
