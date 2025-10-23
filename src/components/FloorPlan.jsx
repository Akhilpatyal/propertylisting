import React, { useState } from "react";

const FloorPlan = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="floorplan-container">
      <h2 className="floorplan-title">Floor Plan</h2>

      <div className="floorplan-content">
        <div className="floorplan-image">
          <img src="/floor-plan-img.png" alt="Floor Plan"/>
        </div>

        <div className="floorplan-tabs">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === "first" ? "active" : ""}`}
              onClick={() => handleTabClick("first")}
            >
              First Floor
            </button>
            <button
              className={`tab-btn ${activeTab === "second" ? "active" : ""}`}
              onClick={() => handleTabClick("second")}
            >
              Second Floor
            </button>
            <button
              className={`tab-btn ${activeTab === "third" ? "active" : ""}`}
              onClick={() => handleTabClick("third")}
            >
              Third Floor
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "first" && (
              <div className="tab">
                <p>
                  Consectetur adipiscing elit. Pellentesque sed elit tempus,
                  consectetur augue vel, venenatis neque. Suspendisse potenti.
                  Nunc convallis nulla fringilla tellus dapibus lobortis.
                </p>
                <p>
                  Nam in bibendum mi, at molestie tellus. Quisque molestie
                  facilisis nisl, non gravida lorem tincidunt in.
                </p>
              </div>
            )}

            {activeTab === "second" && (
              <div className="tab">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                  eius! Sit mollitia quisquam et officiis aliquam quam suscipit
                  dicta facere beatae.
                </p>
                <p>
                  Minima optio minus in assumenda corrupti ratione. Libero iusto
                  architecto incidunt suscipit.
                </p>
              </div>
            )}

            {activeTab === "third" && (
              <div className="tab">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  perspiciatis quia numquam incidunt consequuntur laboriosam esse
                  impedit nesciunt, illo architecto id aliquid.
                </p>
                <p>
                  Facilis repudiandae id blanditiis voluptates tempore optio,
                  doloribus obcaecati eligendi quam alias.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
