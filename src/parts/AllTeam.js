/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Fade from "react-reveal/Fade";

export default function AllTeam({ data }) {
  return (
    <section className="container main-section">
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-15 lg:gap-10 mx-16 justify-items-center">
        {data.map((item, index) => (
          <Fade bottom delay={200 * index}>
            <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105 card-main">
              <div className="flex justify-center xl:mb-15 ">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.imageUrl}
                    className="image-team"
                  />
                  <Card.Body>
                    <Card.Title className="position-center">
                      {item.name}
                    </Card.Title>
                    <Card.Text className="position-center text-color">
                      {item.position}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}
