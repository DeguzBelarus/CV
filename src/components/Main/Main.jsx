import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    let loadingValue = 0;
    let loadingValue2 = 0;

    const interval = setInterval(() => {
      loadingValue++;
      setValue(loadingValue);
      if (loadingValue === 100) clearInterval(interval);
    }, 70);

    const interval2 = setInterval(() => {
      loadingValue2++;
      setValue2(loadingValue2);
      if (loadingValue2 === 100) clearInterval(interval2);
    }, 40);
  }, []);

  return (
    <main>
      <div className="skills">
        <div className="skills-hard">
          <h4>Hard skills:</h4>

          {value < 100 ? (
            <p>
              Loading...
              <span className="loading-value">{value}</span>%
            </p>
          ) : (
            <div className="skills-wrapper">
              <p>JavaScript (ES6)</p>
              <p>CSS3, SCSS</p>
              <p>HTML5</p>
              <p>React.js</p>
              <p>Node.js (basic)</p>
              <p>Express.js (basic)</p>
              <p>PostgreSQL (basic)</p>
              <p>Angular.js (basic)</p>
              <p>Firebase (basic)</p>
              <p>Git</p>
            </div>
          )}
        </div>

        <div className="skills-soft">
          <h4>Soft skills:</h4>

          {value2 < 100 ? (
            <p>
              Loading...
              <span className="loading-value">{value2}</span>%
            </p>
          ) : (
            <div className="skills-wrapper">
              <p>Creativity</p>
              <p>Adaptability</p>
              <p>Critical thinking</p>
              <p>Punctuality</p>
              <p>Quick learning</p>
              <p>Friendliness</p>
            </div>
          )}
        </div>

        <div className="languages">
          <h4>Languages:</h4>
          <p>Eng&shy;lish: B1- (in prog&shy;ress)</p>
          <p>French: A1</p>
          <p>Rus&shy;si&shy;an/Be&shy;la&shy;ru&shy;sian: na&shy;ti&shy;ve</p>
        </div>
      </div>

      <div className="bio">
        <h3>Bio:</h3>

        <div className="about">
          <h4>About Me:</h4>
          <p>
            Hello, you can familiarize yourself with{" "}
            <Link to={"/about"} className="pagelink">
              “about me”
            </Link>{" "}
            and{" "}
            <Link to={"/hobbies"} className="pagelink">
              “my hobbies”
            </Link>{" "}
            information.
          </p>
        </div>

        <div className="education">
          <h4>Education:</h4>
          <p>
            • The Rol&shy;ling Sco&shy;pes School
            ("Ja&shy;va&shy;Script/Front-&shy;End De&shy;ve&shy;lo&shy;per"),
            2022-now
          </p>{" "}
          <p>• Les&shy;sons with Eng&shy;lish Tu&shy;tor, 2021-now</p>
          <p>
            • SKILL&shy;UP ("Front-&shy;End De&shy;ve&shy;lo&shy;per"),
            2021-2022
          </p>
          <p>
            • Fit&shy;ness aca&shy;de&shy;my ("Gym inst&shy;ruc&shy;tor"),
            2020-2021
          </p>
          <p>
            • Vi&shy;tebsk Sta&shy;te Tech&shy;no&shy;lo&shy;gi&shy;cal
            Uni&shy;ver&shy;si&shy;ty ("Eco&shy;no&shy;mist"), 2004-2008
          </p>
          <p>
            • Vi&shy;tebsk Sta&shy;te Po&shy;ly&shy;tech&shy;nic
            Col&shy;le&shy;ge ("Eco&shy;no&shy;mist"), 2001-2004
          </p>
        </div>

        <div className="experience">
          <h4>Xp:</h4>
          <p>
            • The Rol&shy;ling Sco&shy;pes School
            (Ja&shy;va&shy;Script/Front-End De&shy;ve&shy;lo&shy;per,
            prac&shy;tice), 2022 - now
          </p>
          <p>
            • SKILL&shy;UP (Front-End De&shy;ve&shy;lo&shy;per, prac&shy;tice),
            2021 - 2022
          </p>
          <p>• Tax of&shy;fi&shy;ce (Tax ins&shy;pec&shy;tor), 2008 - 2021</p>
          <p>
            • RTMA "Car&shy;dio&shy;lo&shy;gy" (Eco&shy;no&shy;mist), 2005 -
            2006
          </p>
        </div>

        <div className="certificates">
          <h4>Certificates:</h4>
          <p>• SKILLUP - "Front-&shy;End De&shy;ve&shy;lo&shy;per", Feb 2022</p>
          <p>
            • Fit&shy;ness Aca&shy;de&shy;my - "Gym inst&shy;ruc&shy;tor", Jan
            2021
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
