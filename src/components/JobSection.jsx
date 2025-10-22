import React, { useState } from "react";
import { FaBriefcase, FaRegBuilding } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const JobSection = () => {
  const [filters, setFilters] = useState({
    location: "All Locations",
    department: "All Departments",
    jobType: "All Job Types",
  });

  const jobs = [
    {
      title: "Consultant - Retainer",
      type: "Part Time",
      department: "Residential Mandate",
      location: "Bangalore",
    },
    {
      title: "Executive Assistant",
      type: "Full Time",
      department: "Retail",
      location: "Gurgaon",
    },
    {
      title: "Intern",
      type: "Full Time",
      department: "Land Transactions",
      location: "Chennai",
    },
    {
      title: "Marketing Manager",
      type: "Full Time",
      department: "Retail",
      location: "Bangalore",
    },
  ];

  // ✅ Apply filters dynamically
  const filteredJobs = jobs.filter((job) => {
    const matchLocation =
      filters.location === "All Locations" || job.location === filters.location;
    const matchDepartment =
      filters.department === "All Departments" ||
      job.department === filters.department;
    const matchType =
      filters.jobType === "All Job Types" || job.type === filters.jobType;
    return matchLocation && matchDepartment && matchType;
  });

  return (
    <section className="job-section">
      {/* Filter Section */}
      <div className="filter-bar">
        <h2 className="filter-title">Filter By</h2>

        <div className="filter-controls">
          <div className="filter-select">
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option>All Locations</option>
              <option>Bangalore</option>
              <option>Chennai</option>
              <option>Gurgaon</option>
            </select>
            <FaLocationDot className="select-icon" />
          </div>

          <div className="filter-select">
            <select
              value={filters.department}
              onChange={(e) =>
                setFilters({ ...filters, department: e.target.value })
              }
            >
              <option>All Departments</option>
              <option>Residential Mandate</option>
              <option>Retail</option>
              <option>Land Transactions</option>
            </select>
            <FaRegBuilding className="select-icon" />
          </div>

          <div className="filter-select">
            <select
              value={filters.jobType}
              onChange={(e) =>
                setFilters({ ...filters, jobType: e.target.value })
              }
            >
              <option>All Job Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
            </select>
            <FaBriefcase className="select-icon" />
          </div>
        </div>

        <button
          className="search-btn"
          onClick={() => console.log("Applied Filters:", filters)}
        >
          Search &nbsp;
          <CiSearch />
        </button>
      </div>

      {/* Job Count */}
      <h3 className="job-count">
        {filteredJobs.length} Open Position
        {filteredJobs.length !== 1 ? "s" : ""}
      </h3>

      {/* Job List */}
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, i) => (
            <div key={i} className="job-item">
              <div className="job-info">
                <h4 className="job-title">{job.title}</h4>
                <p className="job-meta">
                  <span>◆ {job.type}</span>
                  <span>{job.department}</span>
                  <span>{job.location}</span>
                </p>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs found for the selected filters.</p>
        )}
      </div>
    </section>
  );
};

export default JobSection;
