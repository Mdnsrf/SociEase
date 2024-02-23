import React from 'react';

const SecurityPersonDashboard = () => {
  // Dummy data for visitors
  const visitors = [
    { id: 1, name: 'John Doe', flatNumber: '101', contactNumber: '9876543210', status: 'Pending' },
    { id: 2, name: 'Jane Smith', flatNumber: '202', contactNumber: '9876543211', status: 'Accepted' }
  ];

  // Dummy data for flat owners
  const flatOwners = [
    { id: 1, name: 'Alice', flatNumber: '101' },
    { id: 2, name: 'Bob', flatNumber: '202' }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Form to register new visitor */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Register New Visitor</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="visitorName" className="form-label">Visitor Name</label>
                  <input type="text" className="form-control" id="visitorName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="flatNumber" className="form-label">Flat Number</label>
                  <select className="form-select" id="flatNumber">
                    {flatOwners.map(owner => (
                      <option key={owner.id} value={owner.flatNumber}>{owner.flatNumber}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                  <input type="text" className="form-control" id="contactNumber" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>

        {/* List of visitors */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Visitors List</div>
            <div className="card-body">
              <ul className="list-group">
                {visitors.map(visitor => (
                  <li key={visitor.id} className="list-group-item">
                    <strong>{visitor.name}</strong><br />
                    <span>Flat Number: {visitor.flatNumber}</span><br />
                    <span>Contact Number: {visitor.contactNumber}</span><br />
                    <span>Status: <span className={`badge bg-${visitor.status === 'Pending' ? 'warning' : visitor.status === 'Accepted' ? 'success' : 'danger'}`}>{visitor.status}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* List of flat owners */}
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Flat Owners List</div>
            <div className="card-body">
              <ul className="list-group">
                {flatOwners.map(owner => (
                  <li key={owner.id} className="list-group-item">
                    <strong>{owner.name}</strong><br />
                    <span>Flat Number: {owner.flatNumber}</span>
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

export default SecurityPersonDashboard;
