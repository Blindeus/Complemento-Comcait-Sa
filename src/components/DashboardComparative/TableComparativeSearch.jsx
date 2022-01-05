import React from "react";
import { Input } from "reactstrap";

const DashboardComparativeSearch = () => {
  return (
    <div className="employee-search-container">
      <Input
        type="text"
        className="employee-search-input"
        name="search"
      />
      <div>
      <i className="fas fa-search fa"></i>
      </div>
    </div>
  );
};

export default DashboardComparativeSearch;