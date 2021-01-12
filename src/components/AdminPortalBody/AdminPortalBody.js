import React from 'react'
import "./AdminPortalBody.css"

const AdminPortalBody = ({ allOpportunities }) => {

  //charityName should be set on log in
  const charityName = "NSPCC"
  let charityOpportunities = allOpportunities.filter(opportunity => opportunity.charity === charityName)

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
            {charityOpportunities.map(item => {
              console.log(item.id)
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.taskType}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td className="opp-table-last">
                    <a href="#">delete</a> | <a href="#">edit</a>
                  </td>
                </tr>)
            } 
            )}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default AdminPortalBody
