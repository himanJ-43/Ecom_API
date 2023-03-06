
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./Navbar";


function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);


  const handleCategorySelect = (category) => {
    setCategory(category);
    setSearchQuery("");
  };

  
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory("");
  };

  const filteredProducts = products.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const descriptionMatch = product.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div>
      <h1 id="heck">Ecom store</h1>
      <NavBar
        categories={categories}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
      />
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <p>
              <b>Price: ${product.price}</b>
            </p>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "200px", height: "200px" }}
            />
            <h1>Product Name: {product.title}</h1>
            <h3>Description: {product.description}</h3>
            <h5>
              <img src="/star.png" alt="Star" width="18" height="15" />{" "}
              {product.rating.rate}({product.rating.count})
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
