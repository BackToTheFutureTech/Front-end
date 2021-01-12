import React from 'react'
import "./AdminPortalBody.css"

const AdminPortalBody = () => {

    return (
        <div className="container p-3">
          <h2 className="admin_title">List of Opportunities</h2>
        <div className="float-right">
          <a className="btn btn-primary mb-5 rounded-pill pr-3 pl-3" href="/createOpportunity">Create an opportunity</a>
        </div>
        <section>
          <table className="table table-hover opp-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">When</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Winter Aid</td>
                <td>Serve Food</td>
                <td>20/12/2020</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla vitae suscipit.
                </td>
                <td className="opp-table-last">
                  <a href="#">delete</a> | <a href="#">edit</a>
                </td>
              </tr>
              <tr>
                <td>Gardening</td>
                <td>Serve Food</td>
                <td>20/12/2019</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla vitae suscipit.
                </td>
                <td className="opp-table-last">
                  <a href="#">delete</a> | <a href="#">edit</a>
                </td>
              </tr>
              <tr>
                <td>Mentor a teen</td>
                <td>Serve Food</td>
                <td>20/12/2018</td>
                <td>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla vitae suscipit.
                </td>
                <td className="opp-table-last">
                  <a href="#">delete</a> | <a href="#">edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
}

export default AdminPortalBody
