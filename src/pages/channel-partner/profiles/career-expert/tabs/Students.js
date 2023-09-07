import React from "react";
import { Row, Col, Card, Table, Form } from "react-bootstrap";
const Student = () => {
  return (
    <>
      <div className="table-responsive">
        <Table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Student Name</th>
              <th>Student Number</th>
              <th>Student Mail Id</th>
              <th>Student Id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mayur</td>
              <td>8975300224</td>
              <td>mayurshimpi602@gmail.com</td>
              <td>125895478</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anil</td>
              <td>874393032</td>
              <td>Anil@gmail.com</td>
              <td>242435433</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Abhijeet</td>
              <td>2345464664</td>
              <td>abhijit@gmail.com</td>
              <td>13212333</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Abhijeet</td>
              <td>2345464664</td>
              <td>abhijit@gmail.com</td>
              <td>13212333</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Abhijeet</td>
              <td>2345464664</td>
              <td>abhijit@gmail.com</td>
              <td>13212333</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Student;
