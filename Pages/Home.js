import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [customers, setCustomers] = useState([]);

  const {id} = useParams()
  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/customer/getAllCustomers"
    );
    setCustomers(result.data);
  };

  const deleteCustomer = async(id) =>{
    await axios.delete(`http://localhost:8080/api/customer/deleteCustomerById/${id}`)
    loadCustomers()
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow  ">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">mobile no</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.mobile_no}</td>
                <td>
                    <button className="btn btn-outline-dark mx-2">View</button>
                    <Link className="btn btn-outline-dark mx-2"
                    to = {`/editCustomer/${customer.id}`}
                    >Edit</Link>
                    <button className="btn btn-outline-danger mx-2"
                    onClick={() => deleteCustomer(customer.id)}>Delete</button>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
