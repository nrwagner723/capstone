import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const AddMaterials = (props) => {
  useEffect(() => {
    getAllMaterials();
  }, []);

  async function getAllMaterials() {
    const response = await axios.get("http://127.0.0.1:8000/user_info/");
    props.setUserMaterials(response.data);
  }

  async function deleteMaterial(id) {
    await axios
      .delete(`http://127.0.0.1:8000/user_info/${id}/`)
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
      {props.userMaterials.map((userMaterial) => {
        return (
          <div className="user_materials">
            <p>{userMaterial.title}</p>
            <button
              className="delete"
              onClick={(e) => handleAlert(e, userMaterial.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AddMaterials;
