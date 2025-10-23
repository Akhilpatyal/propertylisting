import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaBriefcase, FaRegBuilding } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import projectsData from "../assets/properties.json"; // import mock data

const Projects = () => {
  const [searchParams] = useSearchParams();
  const propertyType = searchParams.get("propertytype");

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    configuration: "",
    location: "",
  });

  // Filter projects based on URL + selected filters
  useEffect(() => {
    let result = projectsData;

    if (propertyType) {
      result = result.filter(
        (p) => p.type.toLowerCase() === propertyType.toLowerCase()
      );
    }

    if (filters.city) {
      result = result.filter(
        (p) => p.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.configuration) {
      result = result.filter(
        (p) =>
          p.configuration &&
          p.configuration.toLowerCase() === filters.configuration.toLowerCase()
      );
    }

    if (filters.location) {
      result = result.filter(
        (p) => p.location.toLowerCase() === filters.location.toLowerCase()
      );
    }

    setFilteredProjects(result);
  }, [propertyType, filters]);

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Banner */}
      <div className="CareerBanner">
        <h1>{propertyType} Projects</h1>
        <p className="text-drop__line split2">
          Browse through our diverse portfolio
        </p>
      </div>

      {/* Filter Bar */}
      <div className="container">
        <div className="filter-bar">
          <h2 className="filter-title">Filter By</h2>

          <div className="filter-controls">
            {/* City */}
            <div className="filter-select">
              <select name="city" onChange={handleFilterChange}>
                <option value="">City</option>
                {[...new Set(projectsData.map((p) => p.city))].map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <FaLocationDot className="select-icon" />
            </div>

            {/* Location */}
            <div className="filter-select">
              <select name="location" onChange={handleFilterChange}>
                <option value="">Location</option>
                {[...new Set(projectsData.map((p) => p.location))].map(
                  (loc) => (
                    <option key={loc}>{loc}</option>
                  )
                )}
              </select>
              <FaRegBuilding className="select-icon" />
            </div>

            {/* Configuration */}
            <div className="filter-select">
              <select name="configuration" onChange={handleFilterChange}>
                <option value="">Configuration</option>
                {[...new Set(projectsData.map((p) => p.configuration))].map(
                  (config) =>
                    config !== "NA" && <option key={config}>{config}</option>
                )}
              </select>
              <FaBriefcase className="select-icon" />
            </div>
          </div>

          <button className="search-btn">
            Search &nbsp;
            <CiSearch />
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container py-5">
        <div className="row gy-5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div className="col-sm-4" key={project.id}>
                <div className="cards-3 section-gray">
                  <div className="card card-blog">
                    <div className="card-image news-box-items">
                      <a href="#">
                        <div className="news-image">
                          <img src={project.image} alt={project.name} style={{height:"264px"}}/>
                        </div>
                      </a>
                      <div className="ripple-cont"></div>
                    </div>

                    <div className="table p-3">
                      <div className="ele-1">
                        <h6 className="category text-info">
                          {project.city} | {project.location}
                        </h6>
                        <p className="card-description fs-4">
                          {project.name}
                        </p>
                        <p className="fw-bold">{project.price}</p>
                        <div className="pt-3">
                        <Link to={`/projects/${project.id}`}>View Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No projects found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
