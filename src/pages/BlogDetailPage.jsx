import React from "react";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaRegNewspaper } from "react-icons/fa6";
const BlogDetailPage = () => {
  return (
    <div>
      <div className="blog-detailBanner position-relative">
        <div class="banner-content">
        <h1>Commercial Leasing & Advisory</h1>
        <p className=" split2">
          Browse through our diverse portfolio
        </p>
        </div>
        <div className="overlay"></div>
      </div>

      {/*  */}
      <div className="container">
        <div className="blog-post-details">
          <div className="single-blog-post">
            <div className="post-content">
              <ul className="post-list">
                <li>
                  <FaRegUser/> By Admin
                </li>
                <li>
                  <SlCalender /> 18 Dec, 2024
                </li>
                <li>
                  <FaRegNewspaper/> News
                </li>
              </ul>

              <h3>The Art of Strategic Creativity</h3>

              <p className="mb-3">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
              <p className="mb-3">
                The ipsum dolor sit amet consectetur adipiscing elit. Fusce
                eleifend porta arcu. In hac habitasse platea dictumst. In lacus
                libero, faucibus at malesuada sagittis placerat eros sed
                tincidunt augue ac ante rutrum.
              </p>
              <p>
                Nulla facilisi. Vestibulum tristique sem in eros eleifend
                imperdiet. Donec quis convallis neque. In id lacus pulvinar,
                eget vulputate lectus. Ut viverra bibendum lorem.
              </p>

              <div className="highlight-text mt-4 mb-4">
                <p>
                  We also excel in packaging design, as seen in our
                  collaboration with Delicious Delights. Our redesign focused on
                  boosting sales and customer feedback.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M0 20.3691H7.71428L2.57139 30.5539H10.2857L15.4286 20.3691V5.0918H0V20.3691Z"
                    fill="#b49249"
                  />
                  <path
                    d="M20.5703 5.0918V20.3691H28.2846L23.1417 30.5539H30.856L35.9989 20.3691V5.0918H20.5703Z"
                    fill="#b49249"
                  />
                </svg>
              </div>

              <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla mattis ligula consectetur ultrices mauris.
              </p>

              <div
          className="post-featured-thumb bg-cover"
          style={{ backgroundImage: "url('/banner-9.png')" }}
        ></div>

              <p className="pt-5">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
