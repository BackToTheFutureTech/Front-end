import React from 'react'
import { Link } from "react-router-dom"
import "./AdminPortalBody.css"

const AdminPortalBody = ({ charityName, allOpportunities, deleteOpportunity }) => {

  let charityOpportunities = allOpportunities.filter(opportunity => opportunity.charity === charityName)

  return (
    <div className="container p-3">
      <h2 className="admin_title">List of Opportunities</h2>
      <div className="float-right">
        <a className="btn button-MAD-theme mb-5 rounded-pill pr-3 pl-3" href="/adminportal/createOpportunity">Create an opportunity</a>
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
            {charityOpportunities.map(item =>
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.taskType}</td>
                <td>{item.date}</td>
                <td>{item.description}</td>
                <td>
                  <div className="btn-group opp-table__actions" role="group" aria-label="Actions">
                    <button
                      type="button"
                      className="btn opp-table__action"
                      onClick={() => deleteOpportunity(item.id)}
                    >delete</button> | 
                    <Link
                      to={`/adminportal/editOpportunity/${item.id}`}
                      className="btn opp-table__action">
                      edit
                    </Link>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default AdminPortalBody
