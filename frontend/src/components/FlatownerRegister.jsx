import React from 'react';
import { Link } from 'react-router-dom';

const FlatownerRegister = () => {
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <p className="mt-3">Already registered? <Link to="/flatownerlogin">Login here</Link></p>
      </form>
    </div>
  );
};

export default FlatownerRegister;
