import React from "react";
import { useState } from "react";
import axios from "axios";

const MaterialsPage = (props) => {
  const [products, setProducts] = useState(null);

  const [search, setSearch] = useState('');

  const fetchHomeDepotData = async (searchTerm) => {
    try {
      searchTerm = setSearch(prompt('Search for a product:'))
      let response = await axios.get(
        `https://serpapi.com/search.json?engine=home_depot&q=${searchTerm}&api_key=`
      );
      setProducts(response.data.products);
      console.log(searchTerm)
      console.log(search)
      console.log(response.data.products)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchHomeDepotData(search);
  };

  return (
    <div className="container">
      <button onClick={ () => fetchHomeDepotData(search)}>Search</button>
      {products && <h1>{products[0].title} {products[1].title}</h1>}
    </div>
  );
};

export default MaterialsPage;
