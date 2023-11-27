import React, { useState, useEffect } from "react";
import "./AnotherTestComponent.css";

const AnotherTestComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch dummy data from DummyJSON API
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="another-test-container">
      <header className="another-test-header">
        <h1>Another Test Component</h1>
      </header>

      <section className="another-test-section">
        <h2>Dummy Product Table</h2>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className="another-test-footer">
        &copy; 2023 Another Test Component
      </footer>
    </div>
  );
};

export default AnotherTestComponent;
