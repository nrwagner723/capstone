import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./MaterialsPage.css"

const MaterialsPage = (props) => {
  
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");

  const searchSetter = async () => {
    setSearch(prompt("Search for a product:"));
  };

  const fetchHomeDepotData = async () => {
    try {
      let response = await axios.get(
        `https://serpapi.com/search.json?engine=home_depot&q=${search}&api_key=21fcb86339b27dffeece323cb3a4e89eda0ed6ebf45529189b4d6efc0f13c764`
      );
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchSetter();
  };

  useEffect(() => {
    fetchHomeDepotData();
  }, [search]);

  async function addMaterial() {
    await axios.post("http://127.0.0.1:8000/user_info/")
  }

  return (
    <div className="container">
      <button className="search" onClick={(e) => handleSearch(e)}>Search for materials</button> <br/><br/><br/>
      {products && products.map(
        product => <p className="materials_card"> {product.title} <br></br>
        Price: ${product.price} <br/>
        Brand: {product.brand} <br/>
        Rating: {product.rating}/5 <br/>
        <a href={product.link} target="_blank">Link to Product's full page</a>
        <button className="add_button" onClick={(e) => addMaterial(e, product.title, product.price, product.brand, product.rating, product.link)}>Add product to my list</button> </p>
      )}
    </div>
  );
};

export default MaterialsPage;
