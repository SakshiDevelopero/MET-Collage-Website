
import React from "react";
import ResearchLayout from "./Research/ResearchLayout";
import { Navigate } from "react-router-dom";

const Research = () => {
  // Redirect to the PhD Research Center page
  return <Navigate to="/Navigation/Research/PhDCenter" replace />;
};

export default Research;
