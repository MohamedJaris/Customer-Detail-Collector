import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to = "/">
            Riya's Cooks'n'Bakes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          <form>
        <input className="form-control me-2" type="search" placeholder="Search Customer" aria-label="Search"></input>
        </form>
          <Link className="btn btn-outline-light" to = "addCustomer">New Customer</Link>
        </div>
      </nav>
    </div>
  )
}
