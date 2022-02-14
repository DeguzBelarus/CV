import qrLinked from "../../../essentials/qr-code-linked.gif";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={qrLinked} className="qr" alt="qr code linkedin" />
      <div className="square"></div>
      <div className="demos">
        <p>Demos:</p>
        <div className="demo-item">
          <a
            href="https://weather-deguz.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            Weather app
          </a>
          <a
            href="https://github.com/DeguzBelarus/React-Weather-App"
            target="_blank"
            rel="noopener"
          >
            + Github
          </a>
        </div>
        <div className="demo-item">
          <a
            href="https://deguz-mchat.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            Chat MERN-app
          </a>
          <a
            href="https://github.com/DeguzBelarus/MERN-Chat-App"
            target="_blank"
            rel="noopener"
          >
            + Github
          </a>
        </div>
        <div className="demo-item">
          <a
            href="https://deguz-calculator.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            Calculator app
          </a>
          <a
            href="https://github.com/DeguzBelarus/React-Calculator-App"
            target="_blank"
            rel="noopener"
          >
            + Github
          </a>
        </div>
        <div className="demo-item">
          <a
            href="https://deguz-todo.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            Todo app
          </a>
          <a
            href="https://github.com/DeguzBelarus/React_ToDo-App"
            target="_blank"
            rel="noopener"
          >
            + Github
          </a>
        </div>
        <div className="demo-item">
          <a
            href="https://github.com/DeguzBelarus/VanillaJS"
            target="_blank"
            rel="noopener"
          >
            Vanilla.js projects (Github, 5 items)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
