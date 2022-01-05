import React from 'react';
import { Table } from 'reactstrap';

const TableComparativeSale = () => {
    return (
      <Table bordered className='dashboard-comparative-table'>
        <thead className='dashboard-comparative-tittles'>
          <tr>
            <th>Id</th>
            <th>Tienda</th>
            <th>insertar fecha 1</th>
            <th>insertar fecha 2</th>
            <th>Estado Crecimiento</th>
            <th>% Crecimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">112</th>
            <td> Maipu</td>
            <td> 14-05-2021</td>
            <td> 14-05-2022</td>
            <td> Negativo</td>
            <td> -33%</td>
          </tr>
          <tr>
            <th scope="row">213</th>
            <td> Costanera Center</td>
            <td> 14-05-2021</td>
            <td> 14-05-2022</td>
            <td> Positivo</td>
            <td> 55%</td>
          </tr>
          <tr>
            <th scope="row">132</th>
            <td> Alto las Condes</td>
            <td> 14-05-2021</td>
            <td> 14-05-2022</td>
            <td> Positivo</td>
            <td> 22%</td>
          </tr>
          <tr>
            <th scope="row">123</th>
            <td> Imperio</td>
            <td> 11-01-2021</td>
            <td> 12-02-2022</td>
            <td> Negativo</td>
            <td> 10%</td>
          </tr>
          <tr>
            <th scope="row">152</th>
            <td> Apumanque</td>
            <td> 14-05-2021</td>
            <td> 14-05-2022</td>
            <td> Negativo</td>
            <td> -66%</td>
          </tr>
        </tbody>
      </Table>
    );
  }


export default TableComparativeSale;

