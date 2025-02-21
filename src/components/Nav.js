import React,{useState} from 'react';

function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="Logo" width="30" height="30" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={() => window.location.href = "/"}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
          </ul>
        </div>

        <button
          className="btn btn-outline-success ms-3"
          type="button"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Close" : "Search"}
        </button>
        <button
          className="btn btn-outline-primary ms-3"
          type="button"
          onClick={() => window.location.href = "/pages/login.js"}
        >
          Login
        </button>
      </div>

      {showSearch && (
        <div className="p-3 bg-body-tertiary">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
    </div>
  );
}

export default Nav;