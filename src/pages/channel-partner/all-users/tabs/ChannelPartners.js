import React from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ChannelPartners() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Latest registered channel partners</h4>
      </div>

      <div className="table-responsive mt-2 mb-3">
        <Table striped hover className="m-0 ">
          <thead>
            <tr>
              <th>#</th>
              <th>CP ID</th>
              <th>Full Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>1223</td>
              <td>Anil Prajapati</td>
              <td>22 Jan 1967 </td>
              <td>anil@gmail.com </td>
              <td>8975300223</td>
              <td>
                <Link to="/channel/channel-partner-profile">
                  <Button className="btn btn-sm rounded-pill">
                    {" "}
                    View Details{" "}
                  </Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ChannelPartners;
