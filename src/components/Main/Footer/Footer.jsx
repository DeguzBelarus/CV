import qrLinked from "../../../essentials/qr-code-linked.gif";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={qrLinked} className="qr" alt="qr code linkedin" />
      <div className="square"></div>
      <div className="demos">
        <p className="demos-heading-paragraph">Demos:</p>
        <div className="demo-item">
          <a
            className="interesting-project"
            href="https://mysn-deguz.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            MySN
          </a>
          <span>(private, actual)</span>
        </div>
        <div className="demo-item">
          <a
            className="interesting-project"
            href="https://myonlinest.herokuapp.com/"
            target="_blank"
            rel="noopener"
          >
            MyOnlineStore
          </a>
          <span>(private, actual)</span>
        </div>
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
            + Github (old)
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
            + Github (old)
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
            + Github (old)
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
