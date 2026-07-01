import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./style.css";
import Recursive from "./recursive/Recursive";
import Optimized from "./optimised/Optimized";

function Index() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <div className="container-view">
              <div className="heading">Nested Checkbox</div>
              <Link to="/nested-checkbox/recursive">Recursive</Link>
              <Link to="/nested-checkbox/optimized">Optimized</Link>
            </div>
          </div>
        }
      />
      <Route path="/recursive" element={<Recursive />} />
      <Route path="/optimized" element={<Optimized />} />
    </Routes>
  );
}

export default Index;
