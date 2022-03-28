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
        I have chosen Front End because I prefer to work with the visual
        interface and the program/style code, not only with the program code.
        From 2006 till 2008 I made a website about bodybuilding. This site only
        used HTML and some JavaScript functionality.
      </p>
      <p className="about-paragraph">
        I have six+ months of non-commercial experience in Front-End Development.
        Also, I got to know some Back-end basics such as Node.js, Express,
        MongoDB and Socket.io. I have some projects that deployed to
        GitHub and Heroku.
      </p>
      <p className="about-paragraph">
        I understand how the backend works and interacts with the frontend.
      </p>
      <p className="about-paragraph">
        I also practiced a bit on{" "}
        <a
          href="https://www.codewars.com/users/Deguz/"
          target="_blank"
          rel="noopener"
        >
          codewars
        </a>
        .
      </p>
      <p className="about-paragraph">
        I have some{" "}
        <a
          href="https://github.com/DeguzBelarus/React-Native-Todo"
          target="_blank"
          rel="noopener"
        >
          practice{" "}
        </a>
        with React Native.
      </p>
      <p className="about-paragraph">
        I graduated from Vitebsk State Technological University with a degree in
        “Commercial activity” (economist) in 2008. Also, I graduated from
        Vitebsk State Polytechnic College with a degree in “Commercial activity”
        (economist) in 2004.
      </p>
      <p className="about-paragraph">
        Looking forward to your reply, I'll be happy to provide you with more
        information and pass technical interview.
      </p>
      <p className="about-paragraph">Regards, Anton.</p>
      <Link to={"/"}>
        <span className="return">⤺</span>
      </Link>
    </div>
  );
};

export default AboutMe;
