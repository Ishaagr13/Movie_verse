import React, { useState } from "react";

const Navbar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
    handleSearch(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgba(36, 36, 36, 0.803);"}}>
        <div class="container-fluid">
          <a
            class="navbar-brand "
            style={{ color: "white",marginTop:"20px" , marginLeft: "30px", marginRight: "700px" }}
            href="#"
          >
            MOVIE VERSE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                style={{width:"500px"}}
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleChange}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
