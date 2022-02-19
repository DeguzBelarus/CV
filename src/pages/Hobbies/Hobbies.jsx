import { Link } from "react-router-dom";
import "./Hobbies.scss";

const Hobbies = () => {
  return (
    <div className="info-hobbies">
      <h1>My hobbies:</h1>
      <p className="hobbies-paragraph">
        Hello, I have some hobbies in my life.
      </p>
      <p className="hobbies-paragraph">
        For example, I like to exercise in the gym. I have been doing sport
        since 2002. I have a bench press, dumbbells and barbells at home. I do
        sport at home, in the gym and in the park. I lead a healthy lifestyle. I
        completed gym Instructor courses in 2021.
      </p>
      <p className="hobbies-paragraph">
        I’m also interested in computer hardware and software (for instance,
        some programs and{" "}
        <a
          href="https://steamcommunity.com/id/deguz/"
          target="_blank"
          rel="noopener"
        >
          computer games
        </a>
        ). Sometimes I like to build a computer or play computer games of
        different genres.
      </p>
      <p className="hobbies-paragraph">
        In addition, I like animals, especially cats and fish :)
      </p>
      <Link to={"/"}>
        <span className="return">⤺</span>
      </Link>
    </div>
  );
};

export default Hobbies;
