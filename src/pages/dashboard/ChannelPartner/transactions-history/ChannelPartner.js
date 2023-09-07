import React from 'react';
import { Table } from "react-bootstrap";


export const ChannelPartner = () => {
  return (
    <>
        <div className="table-responsive ">
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
    </>
  )
}
