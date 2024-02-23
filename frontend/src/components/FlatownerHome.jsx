import React from 'react';

const FlatOwnerHome = () => {
  return (
    <div className="container mt-5">
    <h2>Flat Owner Home</h2>

    <div className="row mt-4">
      {/* Visitor Requests */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Visitor Requests
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Visitor Name</th>
                  <th>Contact</th>
                  <th>Purpose</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Placeholder rows */}
                <tr>
                  <td>Deepak Kumar</td>
                  <td>1234567890</td>
                  <td>Delivery</td>
                  <td>Pending</td>
                  <td>
                    <button className="btn btn-success me-2">Accept</button>
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Notices */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Notices
          </div>
          <div className="card-body">
            {/* Dummy notices */}
            <ul>
              <li>Notice 1: Some important information</li>
              <li>Notice 2: Another notice here</li>
              <li>Notice 3: Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      {/* Raise Service Request */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Raise Service Request
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="serviceType" className="form-label">Service Type</label>
                <select className="form-select" id="serviceType">
                  <option value="">Select Service Type</option>
                  <option value="electricity">Electricity</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="wireman">Wireman</option>
                  <option value="ac-cleaning">AC Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Previous Service Requests */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Previous Service Requests
          </div>
          <div className="card-body">
            <ul>
              {/* Dummy service requests */}
              <li>Electricity issue - Status: Pending</li>
              <li>Plumbing problem - Status: Resolved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FlatOwnerHome;
