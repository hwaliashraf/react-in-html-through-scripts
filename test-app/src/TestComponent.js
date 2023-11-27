import React from "react";
import "./TestComponent.css";

const TestComponent = () => {
  return (
    <div className="test-container">
      <header className="test-header">
        <h1>Test Component</h1>
      </header>

      <section className="test-section">
        <h2>Welcome to the Test Component!</h2>
        <p>This is a React component with its own styling and content.</p>
        <p>Check out the call to action below:</p>
        <button className="cta-button">Click Me!</button>
      </section>

      <section className="test-section">
        <h2>Another Section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

      <footer className="test-footer">&copy; 2023 Test Component</footer>
    </div>
  );
};

export default TestComponent;
