import { useState } from "react";

import "./Header.scss";
import avatar from "../../essentials/avatar.png";
import linkedin from "../../essentials/linkedin.svg";
import github from "../../essentials/github.svg";
import location from "../../essentials/location.svg";
import instagram from "../../essentials/instagram.svg";

const Header = () => {
  const [avatarActive, setAvatarActive] = useState(false);

  const avatarActivehandle = () => {
    if (avatarActive) {
      setAvatarActive(false);
    } else {
      setAvatarActive(true);
    }
  };

  return (
    <header>
      <div className="round"></div>

      <div className="upper-block">
        <div
          className={!avatarActive ? "avatar-wrapper" : "avatar-wrapper active"}
        >
          <a href="mailto:deguz@mail.ru">Напишите мне ;)</a>

          <img
            src={avatar}
            className={!avatarActive ? "avatar-image" : "avatar-image active"}
            alt="avatar picture"
            onClick={avatarActivehandle}
          />
        </div>
        <div className="headers">
          <span className="letter l1">A</span>
          <span className="letter l2">n</span>
          <span className="letter l3">t</span>
          <span className="letter l4">o</span>
          <span className="letter l5">n</span>
          <span className="letter l6">D</span>
          <span className="letter l7">e</span>
          <span className="letter l8">k</span>
          <span className="letter l9">t</span>
          <span className="letter l10">y</span>
          <span className="letter l11">a</span>
          <span className="letter l12">r</span>
          <span className="letter l13">e</span>
          <span className="letter l14">v</span>
          <h3 className="profession">Front-End Developer</h3>
        </div>
      </div>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/deguzbelarus"
          target="_blank"
          rel="noopener"
        >
          <div className="socials-item">
            <img
              src={linkedin}
              className="socials-image"
              alt="linkedin picture"
            />
            <h5>Anton Dektyarev</h5>
          </div>
        </a>
        <a
          href="https://github.com/DeguzBelarus"
          target="_blank"
          rel="noopener"
        >
          <div className="socials-item">
            <img src={github} className="socials-image" alt="github picture" />
            <h5>DeguzBelarus</h5>
          </div>
        </a>
        <a
          href="https://www.instagram.com/deguz.belarus"
          target="_blank"
          rel="noopener"
        >
          <div className="socials-item">
            <img
              src={instagram}
              className="socials-image"
              alt="instagram picture"
            />
            <h5>@deguz.belarus</h5>
          </div>
        </a>
        <a
          href="https://maps.google.com?saddr=Current+Location&daddr=55.180819900433, 30.18773639963402"
          target="_blank"
          rel="noopener"
        >
          <div className="socials-item">
            <img
              src={location}
              className="socials-image"
              alt="location picture"
            />
            <h5>Vitebsk, Belarus</h5>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
