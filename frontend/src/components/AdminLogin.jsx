import React from "react";
import { Link } from 'react-router-dom';

export function AdminLogin() {
    const handleClick = () => {
        window.location.href = '/Admin';
      };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
                <h4>Admin Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
               A   <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                </div>
                <button type="" className="btn btn-primary" onClick={handleClick}>Login</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
