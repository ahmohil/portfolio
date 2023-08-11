import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Hanan. </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br /> I am a final year student pursuing Bechelors in Computer Science
            (BSCS) from University of the Punjab, Lahore.
            <br />
            I am a very amoitious <span className="purple">Full Stack developer.</span> I love Automating tasks, I have also experienced
            <span className="purple"> Machine Learning, Natural Language Processing and Computer Vision
            </span>
            <br />
            I am also a <span className="purple">competitive programmer </span> and Python is my favourite language for cp.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
