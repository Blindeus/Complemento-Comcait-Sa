import React from 'react';
import TableComparativeSale from './TableComparativeSale';


function DashboardComparative (){
    return ( 
    <div className = "dashboardcomparative-container-main">
        <div className='dashboardcomparative-box-container-table-one'>
            <div className='dashboardcomparative-tittle'>
            </div>
            <div className='dashboardcomparative-table'>
             <TableComparativeSale/>
            </div>
        </div>
    </div>
    );
}
export default DashboardComparative;