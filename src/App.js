import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout"; // Import the layout component
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Render the layout */}
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
