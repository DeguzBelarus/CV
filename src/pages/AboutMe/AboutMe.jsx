import { Link } from "react-router-dom";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="info-about">
      <h1>About Me:</h1>
      <p className="about-paragraph">Hello, let me introduce myself.</p>
      <p className="about-paragraph">
        I am a responsible person who is attentive to details and has some
        creativity.
      </p>
      <p className="about-paragraph">
        I have chosen Front-end because I prefer to work with the visual
        interface and the program/style code, not only with the program code.
        From 2006 till 2008 I made a website about bodybuilding. This site only
        used HTML and some JavaScript functionality.
      </p>
      <p className="about-paragraph">
        I had five and a half months of non-commercial experience in Front-end
        Development while taking SKILLUP courses. While working on my course
        project, I got to know some Back-end basics such as Node.js, Express,
        MongoDB and Socket.io. I have some Front-end projects and one full stack
        (MERN) course project deployed to GitHub and Heroku, you can familiarize
        yourself with them.
      </p>
      <p className="about-paragraph">
        I graduated from Vitebsk State Technological University with a degree in
        “Commercial activity” (economist) in 2008. Also, I graduated from
        Vitebsk State Polytechnic College with a degree in “Commercial activity”
        (economist) in 2004.
      </p>
      <p className="about-paragraph">
        I worked for the tax office for twelve and a half years from 2008 till
        2021. Also, I worked as an economist for Regional Territorial Medical
        Association “Cardiology” from 2005 till 2006.
      </p>
      <p className="about-paragraph">Best regards, Anton Dektyarev.</p>
      <Link to={"/"}>
        <span className="return">⤺</span>
      </Link>
    </div>
  );
};

export default AboutMe;
