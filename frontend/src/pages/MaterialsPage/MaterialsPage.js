import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./MaterialsPage.css";
import "../../components/AddMaterials/AddMaterials";
import AddMaterials from "../../components/AddMaterials/AddMaterials";
import useAuth from "../../hooks/useAuth";

const MaterialsPage = (props) => {
  const [user, token] = useAuth();
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState("");
  const [userMaterials, setUserMaterials] = useState([{}]);

  const searchSetter = async () => {
    setSearch(prompt("Search for a product:"));
  };

  const fetchHomeDepotData = async () => {
    try {
      let response = await axios.get(
        `https://serpapi.com/search.json?engine=home_depot&q=${search}&api_key=21fcb86339b27dffeece323cb3a4e89eda0ed6ebf45529189b4d6efc0f13c764`
      );
      const formattedData = response.data.products.map((product) => {
        return {
          title: product.title,
          price: product.price,
          brand: product.brand,
          rating: product.rating,
          link: product.link,
        };
      });
      setProducts(formattedData);
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

  async function addMaterial(e, product) {
    console.log(product);
    await axios.post("http://127.0.0.1:8000/user_info/add/", product, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  console.log(user)

  return (
    <div className="container">
      <button className="search" onClick={(e) => handleSearch(e)}>
        Search for materials
        {console.log("Products array", products)}
      </button>{" "}
      <br />
      <br />
      <br />
      {products &&
        products.map((product, index) => (
          <div key={index}>
            <p className="materials_card">
              {product.title} <br />
              Price: ${product.price} <br />
              Brand: {product.brand} <br />
              Rating: {product.rating}/5 <br />
              <a href={product.link} target="_blank">
                Link to Product's full page
              </a>
              <button
                className="add_button"
                onClick={(e) => addMaterial(e, product)}>
                Add product to my list
              </button>
            </p>
          </div>
        ))}
      <AddMaterials userMaterials={userMaterials} setUserMaterials={setUserMaterials} />
    </div>
  );
};

export default MaterialsPage;
