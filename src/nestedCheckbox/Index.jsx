import React, { Suspense, lazy } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./style.css";

const Recursive = lazy(() => import("./recursive/Recursive"));
const Optimized = lazy(() => import("./optimised/Optimized"));

const Home = () => (
  <div className="container">
    <div className="container-view">
      <div className="heading">Nested Checkbox</div>
      <Link to="/nested-checkbox/recursive">Recursive</Link>
      <Link to="/nested-checkbox/optimized">Optimized</Link>
    </div>
  </div>
);

function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursive" element={<Recursive />} />
        <Route path="/optimized" element={<Optimized />} />
      </Routes>
    </Suspense>
  );
}

export default React.memo(Index);