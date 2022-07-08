import React, { useState } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";

const PrivateRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (isAuthenticated) {
    return <Outlet />;
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <button
        className="btn btn-primary"
        onClick={() => setIsAuthenticated(true)}
      >
        Log in
      </button>
    </div>
  );
};

export default PrivateRouter;
