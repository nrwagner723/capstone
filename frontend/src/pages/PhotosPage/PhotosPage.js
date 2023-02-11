import React, { Component } from "react";
import axios from "axios";
import { useState } from "react";
import "./Photos.css";
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts";

const PhotosPage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [posts, setPosts] = useState([{
    id: 1,
    image: "/media/files/images/IMG_1405.jpeg"
   }]);

  async function getAllPosts() {
    const response = await axios.get("http://127.0.0.1:8000/photos/");
    setPosts(response.data);
  }

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async (event) => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    console.log(fd);
    await axios.post("http://127.0.0.1:8000/photos/", fd).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <input
        type="file"
        className=""
        onChange={(event) => fileSelectedHandler(event)}
      />
      <button className="button" onClick={(event) => fileUploadHandler(event)}>Upload</button>
      <button className="button" onClick={() => getAllPosts()}>Get Posts</button>
      <p>Choose the photo you want to upload then click Upload and click the Get Posts button to see all photos</p>
      <DisplayPosts posts={posts}/>
    </div>
  );
};

export default PhotosPage;
