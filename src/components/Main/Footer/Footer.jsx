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
            Chat app (refactoring...)
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
          Vanilla.js projects
          <a
            href="https://github.com/DeguzBelarus/VanillaJS"
            target="_blank"
            rel="noopener"
          >
            (Github
          </a>
          +
          <a
            href="https://drive.google.com/file/d/1mW5W3QWm1Im98vRdncxLddTfFJEt0JRl/view?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            .rar)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
