import React from "react";
import { Table } from "react-bootstrap";

function Wallet() {
  return (
    <>
      <h4>Withdrawal transactions</h4>
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Transaction Id</th>
              <th>Date of payment</th>
              <th>Amount paid</th>
              <th>Commission earned</th>
              <th>Balance before package users</th>
              <th>Balance after package renewal </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>1</td>
              <td>14528</td>
              <td>10 March 2020</td>
              <td>INR 100 </td>
              <td>INR 100</td>
              <td>INR 1000</td>
              <td>INR 2000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Wallet;
