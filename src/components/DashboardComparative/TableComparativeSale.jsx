import React from 'react';
import { Table } from 'reactstrap';

const TableComparativeSale = () => {
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar">
      <Table
        size="lg"
        bordered
        className="dashboard-comparative-table"
        id="Tabla comparativa diaria"
      >
        <thead className="dashboard-comparative-tittles">
          <tr>
            <th>Id</th>
            <th>Tienda</th>
            <th>Fecha año anterior </th>
            <th>Fecha año actual</th>
            <th>Estado Crecimiento</th>
            <th>% Crecimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">112</th>
            <td> Maipu</td>
            <td> $$$$$$$</td>
            <td> $$$$$$$</td>
            <td> Negativo</td>
            <td> -33%</td>
          </tr>
          <tr>
            <th scope="row">213</th>
            <td> Costanera Center</td>
            <td> $$$$$$$</td>
            <td> $$$$$$$</td>
            <td> Positivo</td>
            <td> 55%</td>
          </tr>
          <tr>
            <th scope="row">132</th>
            <td> Alto las Condes</td>
            <td> $$$$$$$</td>
            <td> $$$$$$$</td>
            <td> Positivo</td>
            <td> 22%</td>
          </tr>
          <tr>
            <th scope="row">123</th>
            <td> Imperio</td>
            <td> $$$$$$$</td>
            <td> $$$$$$$</td>
            <td> Negativo</td>
            <td> 10%</td>
          </tr>
          <tr>
            <th scope="row">152</th>
            <td> Apumanque</td>
            <td> $$$$$$$</td>
            <td> $$$$$$$</td>
            <td> Negativo</td>
            <td> -66%</td>
          </tr>

        </tbody>
      </Table>
    </div>
  );
};

export default TableComparativeSale;
