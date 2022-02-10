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
          <p>Node.js (basics)</p>
          <p>Express.js (basics)</p>
          <p>Git</p>
        </div>

        <div className="skills-soft">
          <h4>Soft skills:</h4>
          <p>Creativity</p>
          <p>Adaptability</p>
        </div>

        <div className="languages">
          <h4>Languages:</h4>
          <p>English: ~B1 (in progress)</p>
          <p>Russian/Belarusian: native</p>
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
          <p>• SKILLUP ("Front end De&shy;ve&shy;lo&shy;per"), 2021-2022</p>
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
          <p>• Tax office (tax inspector), 2008 - 2021</p>
          <p>• Hospital "Cardiology" (economist), 2005 - 2006</p>
        </div>

        <div className="certificates">
          <h4>Certificates:</h4>
          <p>• SKILLUP - "Frontend Developer", Feb 2022</p>
          <p>• Fitness Academy RB - "Gym instructor", Jan 2021</p>
        </div>
      </div>
    </main>
  );
};

export default Main;
