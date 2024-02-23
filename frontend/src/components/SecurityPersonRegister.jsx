import React, { useState } from 'react';
import axios from 'axios';

function SecurityPersonRegister() {
  const [formData, setFormData] = useState({
    type: '',
    contact: '',
    email: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/servicepersons', formData)
      .then(response => {
        console.log('Service person created:', response.data);
        // Reset the form after successful submission
        setFormData({
          type: '',
          contact: '',
          email: '',
          name: ''
        });
      })
      .catch(error => {
        console.error('Error creating service person:', error);
      });
  };

  return (
    <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h4>Security Person Register</h4>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter name"/>
                        </div>
                        <div class="form-group">
                            <label for="contact">Contact</label>
                            <input type="text" class="form-control" id="contact" placeholder="Enter contact number"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default SecurityPersonRegister;