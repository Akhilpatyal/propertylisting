
import Video from "../components/video";
import Whycarousel from "../components/Whycarousel";

const Whoweare = () => {
  return (
    <div>
      <Video />
      <div className="container py-5 belowVideo">
          <p>Jenika Ventures is not just a consulting firm—it’s a growth partner for clients and developers alike, operating across residential, commercial, luxury and mixed-use segments.With Abhishek Raj at the helm, our journey continues to be defined by bold goals, customer-centricity and an unshakable commitment to shaping the future of Indian real estate. </p>
      </div>
      <div className="container py-5 ourStorySection">
      
        <div className="row">
          <div className="col-12 col-md-6 ourStory">
            <img src="/public/banner-6.png" alt="" className="h-100 w-100" />
          </div>
          <div className="col-12 col-md-6 ourStory">
            <h1 className="text-center">Our Story</h1>
            <p>Founded in 2020, Jenika Ventures was born out of a vision to bring
            trust, transparency and innovation into India’s real estate
            consulting space.</p>
            <p>What started as a bold idea turned into an
            operational reality in 2021, and within just a few years, we have
            grown into one of India’s fastest-emerging real estate consulting
            firms. The driving force behind this growth has been Mr. Abhishek
            Raj, CEO of Jenika Ventures. With a forward-looking vision and a
            customer-first philosophy, he has steered the company from a
            promising start-up to a trusted national consultancy. His belief
            that real estate consulting should go beyond transactions to deliver
            solutions, partnerships and long-term value has been the foundation
            of our culture. Under his leadership, Jenika Ventures forged strong
            alliances with India’s leading developers like DLF, Tata, Godrej and
            Lodha achieving ₹100 crore in sales in our very first year. By
            combining strategic insights with digital-first solutions, Abhishek
            Raj has played a pivotal role in driving our rapid expansion into
            key markets including Delhi-NCR, Mumbai, Pune, Bengaluru, Hyderabad
            and Goa. Today, Jenika Ventures is not just a consulting firm—it’s a
            growth partner for clients and developers alike, operating across
            residential, commercial, luxury and mixed-use segments. With
            Abhishek Raj at the helm, our journey continues to be defined by
            bold goals, customer-centricity and an unshakable commitment to
            shaping the future of Indian real estate.</p>
          </div>
        </div>
      </div>

      <div className="container py-5 belowVideo">
          <h1>Our Mission</h1>
          <p>Transformingreal estateby combiningexpertise, innovation,and technologyto createsmarter solutionsfor tomorrow.</p>
      </div>

      <div className="container py-5">
        <h1>Our Story</h1>
        <div className="row">
          <div className="col-6">
            <img src="/public/banner-6.png" alt="" className="h-100 w-100" />
          </div>
          <div className="col-6">
            <ul>
              <li>
                2021: Partnered with Grade A+ developers like DLF, Tata, Godrej,
                and Lodha Group. Achieved ₹100 crore sales in our very first
                year.
              </li>
              <li>
                2022: Spread wings across Delhi-NCR, Mumbai and Pune. Recognized
                as Outstanding Real Estate Company of the Year 2022.
              </li>
              <li>
                2023: Deepened collaboration with Lodha Group. Diversified into
                commercial & mixed-use projects. Surpassed ₹300 crore with 80%
                YoY growth.
              </li>
              <li>
                2024: Expanded into Goa, Bengaluru & Hyderabad. Hit ₹750 crore
                in sales with 150% YoY growth, moving closer to becoming a
                top-tier consultancy nationwide.
              </li>
              <li>
                2025: Now chasing our boldest target—₹2,000 crore in sales with
                2x growth in a single year. Backed by client trust, strategic
                alliances and our relentless pursuit of excellence.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
