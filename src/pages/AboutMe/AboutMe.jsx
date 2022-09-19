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
        I have 1+ year of practice in Front-End and Fullstack development. Also,
        I got to know some Back-end and other interesting technologies such as
        Node.js, Express.js, MongoDB, Firebase, PostgreSQL (with sequelize ORM)
        and Socket.io. I have been practicing a lot for more than one year.
      </p>
      <p className="about-paragraph">
        Also, I understand how the backend works and interacts with the
        frontend. My preferable JS Framework is React.js, but i have
        familiarized also with Angular.js and NestJS.
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
        I have two interesting projects to show (their code is hidden, but I can
        show it individually):
      </p>
      <p className="about-paragraph">
        - I'm developing a social service (I named it{" "}
        <a
          href="https://mysn-deguz.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          MySN{" "}
        </a>{" "}
        ): authorization, a chat (with crypted messages) and a training sport
        diary using React.js, ReduxTK, Node.js (Express.js), MongoDB{"->"}
        PostgreSQL (sequelize), socket.io, Firebase, SCSS.
      </p>
      <p className="about-paragraph">
        - And also, I'm making an online store (I named it{" "}
        <a
          href="https://myonlinest.herokuapp.com/"
          target="_blank"
          rel="noopener"
        >
          MyOnlineStore{" "}
        </a>{" "}
        ) using React.js, ReduxTK, Node.js (Express.js), PostgreSQL (sequelize),
        SCSS with admin panel. Currently, you should open it on desktop with at
        least 1024px of display width, I have not completed adaptation yet -
        please log in as demo user with admin rights to check admin panel:
        demo@demo.com 123456789.
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
