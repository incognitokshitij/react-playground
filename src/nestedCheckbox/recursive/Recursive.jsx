import React from "react";

function Recursive() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <div className="container-view">
              <div className="heading">Nested Checkbox</div>
              <Link to="/nestedCheckbox/recursive">Recursive</Link>
              <Link to="/nestedCheckbox/optimized">Optimized</Link>
            </div>
          </div>
        }
      />
      <Route path="/recursive" element={<Recursive />} />
      <Route path="/optimized" element={<Optimized />} />
    </Routes>
  );
}

export default Recursive;
