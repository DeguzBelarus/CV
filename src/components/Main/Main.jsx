import "./Main.scss";

const Main = () => {
  return (
    <main>
      <div className="skills">
        <div className="skills-hard">
          <h4>Hard skills:</h4>
          <p>JavaScript (ES6)</p>
          <p>CSS3, SCSS</p>
          <p>HTML5</p>
          <p>React.js</p>
          <p>Node.js (basic)</p>
          <p>Express.js (basic)</p>
          <p>Socket.io (basic)</p>
          <p>Git</p>
        </div>

        <div className="skills-soft">
          <h4>Soft skills:</h4>
          <p>Creativity</p>
          <p>Adaptability</p>
          <p>Critical thinking</p>
          <p>Punctuality</p>
          <p>Quick learning</p>
        </div>

        <div className="languages">
          <h4>Languages:</h4>
          <p>English: A2 (in progress)</p>
          <p>Rus&shy;si&shy;an/Be&shy;la&shy;ru&shy;sian: na&shy;ti&shy;ve</p>
        </div>
      </div>

      <div className="bio">
        <h3>Bio:</h3>

        <div className="about">
          <h4>About Me:</h4>
          <p>Hello</p>
        </div>

        <div className="education">
          <h4>Education:</h4>
          <p>
            • SKILLUP ("Front-&shy;end De&shy;ve&shy;lo&shy;per"), 2021-2022
          </p>
          <p>
            • Fit&shy;ness aca&shy;de&shy;my RB ("Gym inst&shy;ruc&shy;tor"),
            2020-2021
          </p>
          <p>
            • Vi&shy;tebsk Sta&shy;te Tech&shy;no&shy;lo&shy;gi&shy;cal
            Uni&shy;ver&shy;si&shy;ty ("Eco&shy;no&shy;mist"), 2004-2008
          </p>
          <p>
            • Vi&shy;tebsk Sta&shy;te Po&shy;ly&shy;tech&shy;ni&shy;cal
            Col&shy;le&shy;ge ("Eco&shy;no&shy;mist"), 2001-2004
          </p>
        </div>

        <div className="experience">
          <h4>Experience:</h4>
          <p>• Tax of&shy;fi&shy;ce (tax ins&shy;pec&shy;tor), 2008 - 2021</p>
          <p>
            • RTMA "Car&shy;dio&shy;lo&shy;gy" (eco&shy;no&shy;mist), 2005 -
            2006
          </p>
        </div>

        <div className="certificates">
          <h4>Certificates:</h4>
          <p>• SKILLUP - "Front-&shy;end De&shy;ve&shy;lo&shy;per", Feb 2022</p>
          <p>
            • Fit&shy;ness Aca&shy;de&shy;my RB - "Gym inst&shy;ruc&shy;tor",
            Jan 2021
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
