import React, { useState, useEffect } from "react";
import "./DisplayPosts.css";
import axios from "axios";

const DisplayPosts = (props) => {
  
    useEffect(() => {
    getAllPosts();
  }, []);

  async function getAllPosts() {
    const response = await axios.get("http://127.0.0.1:8000/photos/");
    props.setPosts(response.data);
  }

  async function deletePhoto(id) {
    await axios
      .delete(`http://127.0.0.1:8000/photos/${id}/`)
      .then((result) => getAllPosts());
  }

  async function deleteAlert(id) {
    let user_input = prompt(
      "Are you sure you want to delete this photo? (answer 'yes' or 'no')"
    );
    if (user_input === "yes") {
      deletePhoto(id);
      getAllPosts();
    }
  }

  const handleAlert = (event, id) => {
    event.preventDefault();
    deleteAlert(id);
  };

  return (
    <div className="card-container">
      {props.posts.map((post) => {
        return (
          <div className="image_container">
            <img
              className="card_image"
              src={`http://127.0.0.1:8000${post.image}`}/>
            <button className="delete" onClick={(e) => handleAlert(e, post.id)}>Delete</button>
            <br/><br/><br/>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
