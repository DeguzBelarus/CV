import "./Header.scss";
import avatar from "../../essentials/avatar.png";
import linkedin from "../../essentials/linkedin.svg";
import github from "../../essentials/github.svg";
import location from "../../essentials/location.svg";
import instagram from "../../essentials/instagram.svg";

const Header = () => {
  return (
    <header>
      <div className="round"></div>
      <img src={avatar} className="avatar-image" alt="avatar picture" />
      <div className="headers">
        <h1>Anton Dektyarev</h1>
        <h3>Frontend developer</h3>
      </div>
      <div className="socials">
        <div className="socials-item">
          <img
            src={linkedin}
            className="socials-image"
            alt="linkedin picture"
          />
          <h5>Anton Dektyarev</h5>
        </div>
        <div className="socials-item">
          <img src={github} className="socials-image" alt="github picture" />
          <h5>DeguzBelarus</h5>
        </div>
        <div className="socials-item">
          <img
            src={instagram}
            className="socials-image"
            alt="instagram picture"
          />
          <h5>@deguz.belarus</h5>
        </div>
        <div className="socials-item">
          <img
            src={location}
            className="socials-image"
            alt="location picture"
          />
          <h5>Vitebsk, Belarus</h5>
        </div>
      </div>
    </header>
  );
};

export default Header;
