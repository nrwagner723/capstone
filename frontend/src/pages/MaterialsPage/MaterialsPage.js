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
      console.log(search);
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
    if (search == '') {
      console.log('Search is empty')
    } else {
      fetchHomeDepotData();
    }
  }, [search]);

  return (
    <div className="container">
      <button onClick={(e) => handleSearch(e)}>Search for materials</button>
      {products && products.map(
        product => <p className="materials"> {product.title} <br></br>
        Price: {product.price} <br></br>
        Rating: {product.rating}
        <a href={product.link} target="_blank">Link to Product's full page</a> </p>
      )}
    </div>
  );
};

export default MaterialsPage;
