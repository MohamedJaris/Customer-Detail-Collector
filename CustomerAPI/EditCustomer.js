import axios from 'axios';
import React, {useEffect, useState} from 'react';    
import {Link, useNavigate, useParams} from "react-router-dom"
export default function EditCustomer() {

  let navigate = useNavigate();

  const {id} = useParams();
  const [customer, setCustomer] = useState({
    first_name:"",
    last_name:"",
    email:"",
    address:"",
    mobile_no:""
  });

  const {first_name,last_name,email,address,mobile_no} = customer

  const onInputChange = (e) => {
    setCustomer({...customer,[e.target.name]: e.target.value})
  }

  useEffect(() => {
    loadCustomers();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/customer/editCustomerById/${id}`,customer);
    navigate("/")
  };

  const loadCustomers = async() => {
      const result = await axios.get(`http://localhost:8080/api/customer/getCustomerById/${id}`)
      setCustomer(result.data)
  }

  return (
 <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Existing Customer</h2>
            <form onSubmit={(e) => onSubmit(e)}>

              <div className="mb-3">
                <label htmlFor="first_name" className = "form-lable">
                  First name
                </label>
                <input
                text={"text"}
                className="form-control"
                placeholder="Enter your First Name"
                name="first_name"
                value={first_name}
                onChange={(e) => onInputChange(e)}
                /> 
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className = "form-lable">
                  Last name
                </label>
                <input
                text={"text"}
                className="form-control"
                placeholder="Enter your Last Name"
                name="last_name"
                value={last_name}
                onChange={(e) => onInputChange(e)}
                /> 
              </div>

              <div className="mb-3">
                <label htmlFor="email" className = "form-lable">
                  email
                </label>
                <input
                text={"text"}
                className="form-control"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                /> 
              </div>

              <div className="mb-3">
                <label htmlFor="address" className = "form-lable">
                  Address
                </label>
                <input
                text={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                /> 
              </div>

              <div className="mb-3">
                <label htmlFor="mobile_no" className = "form-lable">
                  Mobile Number: 
                </label>
                <input
                type="number"
                className="form-control"
                placeholder="Enter your Mobile Number"
                name="mobile_no"
                id="mobile_no"
                value={mobile_no}
                onChange={(e) => onInputChange(e)}
                /> 
              </div>
              <button type="submit" className = "btn btn-outline-dark">Submit</button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
        </div>
    </div>
 </div>
  );
}

