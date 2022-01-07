import React, { useState } from 'react';
import TableComparativeSale from './TableComparativeSale';
import './DashboardComparative.scss';
import DashboardComparativeSearch from './TableComparativeSearch';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'


const DashboardComparative = () => {
  const [selectDate, setSelectedDate] = useState(null);

  return (
    <div className="dashboard">
      <div className="dashboardcomparative-container-main">
        <div className="dashboardcomparative-box-container-table-one">
          <div className="dashboard-comparative-tittle">
            Comparativo Diario de Venta
          </div>
          <div className="dashboard-comparative-header">
            <div className="dashboard-comparative-select-filter">
              <Input bsSize="sm" type='select'>
                <option value="todas">Todas</option>
                <option value="sei">Sei</option>
                <option value="beauty">Beauty</option>
              </Input>
            </div>
            <div className='dashboard-comparative-filters'>
              <div className="dashboardcomparative-date">
                <div>
                  <i className="far fa-calendar"></i>
                </div>
                <Datepicker
                  selected={selectDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                />
              </div>
              <div className="dashboard-comparative-search">
                <DashboardComparativeSearch />
              </div>
            </div>
          </div>
          <div className="dashboardcomparative-table">
            <TableComparativeSale />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardComparative;
