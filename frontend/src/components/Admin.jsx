import React from 'react';

const Admin = () => {
  // Dummy data for notices
  const notices = [
    { id: 1, title: 'Notice 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', dateCreated: '2022-10-10' },
    { id: 2, title: 'Notice 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', dateCreated: '2022-10-11' }
  ];

  // Dummy data for service requests
  const serviceRequests = [
    { id: 1, flatNumber: '101', serviceType: 'Plumbing', status: 'Pending' },
    { id: 2, flatNumber: '202', serviceType: 'Electricity', status: 'Resolved' }
  ];

  // Dummy data for registration requests
  const registrationRequests = [
    { id: 1, username: 'John Doe', role: 'Flat Owner', status: 'Pending' },
    { id: 2, username: 'Jane Smith', role: 'Security Person', status: 'Pending' }
  ];

  const handleEditNotice = (id) => {
    // Handle edit notice functionality
  };

  const handleDeleteNotice = (id) => {
    // Handle delete notice functionality
  };

  const handleChangeRequestStatus = (id, status) => {
    // Handle change request status functionality
  };

  const handleApproveRequest = (id) => {
    // Handle approve request functionality
  };

  const handleRejectRequest = (id) => {
    // Handle reject request functionality
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Dashboard */}
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">Dashboard</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Visitors</h5>
                      <p className="card-text">100</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Requests</h5>
                      <p className="card-text">50</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Pending Requests</h5>
                      <p className="card-text">20</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card bg-light mb-3">
                    <div className="card-body">
                      <h5 className="card-title">Total Flats</h5>
                      <p className="card-text">30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Notice Form */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-success text-white">Add Notice</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="title" />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea className="form-control" id="content" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Notice</button>
              </form>
            </div>
          </div>
        </div>

        {/* Notices */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-info text-white">Notices</div>
            <div className="card-body">
              <ul className="list-group">
                {notices.map(notice => (
                  <li key={notice.id} className="list-group-item">
                    <strong>{notice.title}</strong><br />
                    {notice.content}<br />
                    <small>{notice.dateCreated}</small><br />
                    <div className="btn-group mt-2" role="group">
                      <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditNotice(notice.id)}>Edit</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteNotice(notice.id)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Requests */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">Service Requests</div>
            <div className="card-body">
              <ul className="list-group">
                {serviceRequests.map(request => (
                  <li key={request.id} className="list-group-item">
                    <strong>Flat Number:</strong> {request.flatNumber}<br />
                    <strong>Service Type:</strong> {request.serviceType}<br />
                    <strong>Status:</strong> {request.status}<br />
                    <div className="btn-group mt-2" role="group">
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleChangeRequestStatus(request.id, 'Resolved')}>Resolve</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleChangeRequestStatus(request.id, 'Rejected')}>Reject</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Registration Requests */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-danger text-white">Registration Requests</div>
            <div className="card-body">
              <ul className="list-group">
                {registrationRequests.map(request => (
                  <li key={request.id} className="list-group-item">
                    <strong>Username:</strong> {request.username}<br />
                    <strong>Role:</strong> {request.role}<br />
                    <strong>Status:</strong> {request.status}<br />
                    <div className="btn-group mt-2" role="group">
                      <button className="btn btn-sm btn-success me-2" onClick={() => handleApproveRequest(request.id)}>Approve</button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleRejectRequest(request.id)}>Reject</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
