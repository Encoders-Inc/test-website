import React from "react";
import image1 from "../assets/images/team.png";

const Careercard = ({ data }) => {
  return (
    <div class="container opened_positions">
      <div class="row">
        {data?.map((item, index) => (
          <div class="col-md-4 cards" key={item.id}>
            <div class="career_card">
              <div class="job_number">
                <p>{item.jobs} Jobs</p>
              </div>
              <img src={image1} alt="Avatar" />
              <div class="career_container">
                <p className="individual_header">{item.title}</p>

                <p>{item.description}</p>
              </div>
              <div class="openings_button">
                <button type="submit">View Openings</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careercard;
