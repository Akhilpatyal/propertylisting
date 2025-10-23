import React from "react";
import { useParams } from "react-router-dom";
import { FaTelegramPlane,FaSwimmingPool  } from "react-icons/fa";
import { PiStack,PiSecurityCameraLight,PiElevatorLight  } from "react-icons/pi";
import { MdAir,MdOutlineLocalLaundryService,MdOutlineSoupKitchen ,MdOutlineCurrencyRupee  } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { BsBuildings, BsCalendar2Date } from "react-icons/bs";
import { CgSmartHomeRefrigerator,CgGym  } from "react-icons/cg";
import projectsData from "../assets/properties.json";
import { HiSquare3Stack3D, HiMiniBuildingOffice2 } from "react-icons/hi2";
import ProjectSlider from "../components/ProjectSlider";
import FloorPlan from "../components/FloorPlan";
const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  if (!project) return <p>Project not found</p>;
  return (
    <>
      <div className="CareerBanner">
        <h1>{project.name}</h1>
        <p className="text-drop__line split2">
          Browse through our diverse portfolio
        </p>
      </div>
      {/*  */}
      <div className="container py-5 projectDetail">
        <div className="row">
          <div className="col-sm-8">
            <ProjectSlider />

            <div className="overview py-5">
              <h2>OVERVIEW</h2>
              <p>
                Consectetur adipiscing elit. Pellentesque sed elit tempus,
                consectetur augue vel, venenatis neque. Suspendisse potenti.
                Nunc convallis nulla fringilla tellus dapibus lobortis. Nam in
                bibendum mi, at molestie tellus. Quisque molestie vel elit nec
                ultrices. Pellentesque a ex id lectus sagittis bibendum. Mauris
                ante nunc, eleifend sed consectetur non, rutrum quis diam.
                Suspendisse ultricies molestie tellus dapibus maximus. Quisque
                interdum accumsan velit ac pellentesque. Nam est risus, auctor
                ut diam in, mollis lobortis tellus.
              </p>
              <p>
                Suspendisse potenti. Nunc convallis nulla fringilla tellus
                dapibus lobortis. Nam in bibendum mi, at molestie tellus.
                Quisque molestie vel elit nec ultrices. Pellentesque a ex id
                lectus sagittis bibendum. Mauris ante nunc, eleifend sed
                consectetur non, rutrum quis diam. Suspendisse ultricies
                molestie tellus dapibus maximus. Quisque interdum accumsan velit
                ac pellentesque. Nam est risus, auctor ut diam in, mollis
                lobortis tellus.
              </p>
            </div>

            {/* overview */}
            <div className="discibe pb-5">
              <h2 className="ameneties-title">Description</h2>
              <div className="ul-ameneties">
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <BsBuildings style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Property Type</div>
                    <div className="value">Apartments, Residential</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <MdOutlineCurrencyRupee  tack3D style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Price</div>
                    <div className="value">Rs. 4.49 Crore* to 11.75 Crore*</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <BsCalendar2Date style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Builtup Area</div>
                    <div className="value">1992 Sq.ft. to 2592 Sq.ft.</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <HiMiniBuildingOffice2 style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Total Land Area</div>
                    <div className="value">17.5 Acres</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <HiMiniBuildingOffice2 style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Total Unit</div>
                    <div className="value">668</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <HiMiniBuildingOffice2 style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Unit Variants</div>
                    <div className="value">3,4 BHK</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <HiMiniBuildingOffice2 style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt">
                    <div className="key">Possession TIME</div>
                    <div className="value">2029</div>
                  </span>
                </span>
              </div>
            </div>

            {/* ameneties */}
            <div className="ameneties">
              <h2 className="ameneties-title">Features & Aminities</h2>
              <div className="ul-ameneties">
                <span className="features">
                  <span className="icon">
                    <MdAir  style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Air Conditioning</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <CgSmartHomeRefrigerator style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Refrigerator</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <CgGym  style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Gym</span>
                </span>
                
                <span className="features">
                  <span className="icon">
                    <PiStack style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Front Yard</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <FaSwimmingPool  style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Swimming Pool</span>
                </span>
               
                <span className="features">
                  <span className="icon">
                    <MdOutlineLocalLaundryService  style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Laundry</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <PiSecurityCameraLight style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> 24x7 Security</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <BiSolidVideos style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Media Room</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <MdOutlineSoupKitchen   style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Equipped Kitchen</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <PiElevatorLight  style={{ color: "#c80a17" }} />
                  </span>
                  <span className="txt"> Elevator</span>
                </span>
              </div>
            </div>

            {/* Prices & Plans */}
            <FloorPlan />

            {/* location */}
            <div className="location">
              <h2>Location</h2>
              <div className="locationMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7301.344092278619!2d90.414319!3d23.79469!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1761220961366!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-sm-4 contactform">
            <div className="formcol formRadius">
              <h1>
                Send us a <span className="brown">message</span>
              </h1>
              <form action="" className="pt-4">
                <div className="row gy-4">
                  <div className="col-12 ">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-12 ">
                    <input type="email" placeholder="Your Email Address" />
                  </div>

                  <div className="col-12 ">
                    <input type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows={5}
                      name=""
                      id=""
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="animated-btn">
                      Submit <FaTelegramPlane />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
