import React from 'react';
import axios from "axios";
import { useState } from "react";
import "./Photos.css";
import DisplayPosts from "../../components/DisplayPosts/DisplayPosts";
// import useAuth from "../../hooks/useAuth";

const PhotosPage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [posts, setPosts] = useState([{}]);
  // const [user, token] = useAuth();

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
      <button className="button" onClick={() => getAllPosts()}>See Posts</button>
      <p>Choose the photo you want to upload then click Upload then the See Posts button to see all photos</p>
      <DisplayPosts posts={posts} setPosts={setPosts}/>
    </div>
  );
};

export default PhotosPage;