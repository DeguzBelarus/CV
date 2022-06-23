import { Link } from "react-router-dom";

import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="info-about">
      <h1>About Me:</h1>
      <p className="about-paragraph">Hello, let me introduce myself.</p>
      <p className="about-paragraph">
        I am a responsible person who is attentive to details and has some
        creativity. I have chosen Front End because I enjoy to work with the
        visual interface and the program/style code.
      </p>
      <p className="about-paragraph">
        I have 10 month of practice in Front-End. Also, I got to know some
        Back-end basics such as Node.js, Express, MongoDB, Firebase and
        Socket.io. I have practiced a lot last 10 months.
      </p>
      <p className="about-paragraph">
        Also, I understand how the backend works and interacts with the
        frontend.
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
        Currently, I'm developing my{" "}
        <a
          href="https://mysn-deguz.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          project{" "}
        </a>{" "}
        (authorization, a chat (with crypted messages) and a training sport
        diary) using React.js and Node.js (in future will move to Angular.js and
        NestJS).
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
