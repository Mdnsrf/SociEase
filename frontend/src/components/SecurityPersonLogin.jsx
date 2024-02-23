import React from "react";
import { Link } from 'react-router-dom';

export function SecurityPersonLogin() {
    const handleClick = () => {
        window.location.href = '/securityPersonDashboard';
      };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Security Person Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Login</button>
              </form>
              <div className="mt-3 text-center">
                <p>Don't have an account? <Link to="/SecurityPersonRegister">Register here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityPersonLogin;
