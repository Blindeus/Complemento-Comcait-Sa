import React from 'react';
import { Input } from 'reactstrap';

const DashboardComparativeSearch = () => {
  return (
    <div className="employee-search-container">
      <div>
        <i className="fas fa-search fa"></i>
      </div>
      <Input
        type="text"
        className="employee-search-input"
        name="search"
        size="sm"
      />
    </div>
  );
};

export default DashboardComparativeSearch;
