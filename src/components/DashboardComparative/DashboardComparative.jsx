import React, { useState } from 'react';
import TableComparativeSale from './TableComparativeSale';
import "./DashboardComparative.scss"
import DashboardComparativeSearch from './TableComparativeSearch'
import Datepicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'


const DashboardComparative = ()=>{
     const [selectDate,setSelectedDate]= useState(null)
    
    
    return ( 
        <div className='dashboard'>
    <div className = "dashboardcomparative-container-main">
        <div className='dashboardcomparative-box-container-table-one'>
             Comparativo Diario de Venta
            <div className='dashboard-comparative-header'>
            <div className='dashboardcomparative-date'>
                <Datepicker 
                 selected={selectDate}
                 onChange={date =>setSelectedDate(date)}
                 dateFormat='dd/MM/yyyy'
                 maxDate={new Date()}
                 />
            </div>
            <div className='dashboardcomparative-date'>
                <Datepicker 
                 selected={selectDate}
                 onChange={date =>setSelectedDate(date)}
                 dateFormat='dd/MM/yyyy'
                 maxDate={new Date()}
                 />
            </div>

            <div className='dashboard-comparative-search'>
              <DashboardComparativeSearch/>
            </div>
            </div>
            <div className='dashboardcomparative-table'>
             <TableComparativeSale/>
            </div>
        </div>
    </div>
    </div>
    );
}
export default DashboardComparative;