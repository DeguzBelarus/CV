import qrLinked from "../../../essentials/qr-code-linked.gif";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <img src={qrLinked} className="qr" alt="qr code linkedin" />
      <div className="square"></div>
    </footer>
  );
};

export default Footer;
