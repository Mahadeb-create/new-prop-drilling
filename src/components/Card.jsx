import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ props }) => {
  return (
    <div className="card">

      {/* Top section */}
      <div className="top">
        <img src={props.brandLogo} alt={props.name} />

        <button className="bookmark">
          <Bookmark size={20} />
        </button>
      </div>

      {/* Center section */}
      <div className="center">
        <div className="company">
          <h3>{props.name}</h3>
          <span>{props.datePosted}</span>
        </div>

        <h2>Software Engineer</h2>

        <div className="tags">
          <span>{props.postTag1}</span>
          <span>{props.postTag2}</span>
        </div>

        <p>{props.location}</p>
      </div>

      {/* Bottom section */}
      <div className="bottom">
        <hr />

        <div className="salary">
          <h2>{props.pay}</h2>
          <p>Salary</p>
        </div>

        <button className="apply-btn">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default Card;
