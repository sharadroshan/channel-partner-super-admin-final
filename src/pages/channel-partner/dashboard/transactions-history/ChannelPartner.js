import React from "react";
import { Table, Pagination } from "react-bootstrap";

export const ChannelPartner = () => {
  return (
    <>
      <div className="table-responsive mb-3">
        <Table hover className="m-0">
          <thead>
            <tr>
              <th>Customer Name </th>
              <th>Class Name </th>
              <th>Transaction Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abhijeet Chaudhary</td>
              <td>Class A</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Aadesh Patil</td>
              <td>Class B</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Pritam Gosavi</td>
              <td>Class A</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Abhijeet Chaudhary</td>
              <td>Class A</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Aadesh Patil</td>
              <td>Class B</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
            <tr>
              <td>Pritam Gosavi</td>
              <td>Class A</td>
              <td>10th Oct 2022</td>
              <td>₹ 10,000</td>
              <td>
                <span className="me-1 bg-success badge rounded-pill bg-primary">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};
