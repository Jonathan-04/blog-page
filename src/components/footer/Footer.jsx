import "@/components/footer/Footer.css";

import IconGitHub from "@/components/icons/GitHub";
import IconLinkedin from "@/components/icons/Linkedin";
import IconOracleNext from "@/components/icons/OracleNext";

function Footer() {
  return (
    <footer>
      <ul className="redes">
        <li>
          <h2>Blog Page</h2>
        </li>
        <li>jonathanvel84@gmail.com</li>
        <li>
          <ul className="sub-redes">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jonathanvel04"
              >
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Jonathan-04">
                <IconGitHub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://app.aluracursos.com/emprega-one/profile/jonathanvel84"
              >
                <IconOracleNext />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="important">
        <p>
          Esta web es con fines de aprendizaje en el desarrollo Front-End, el
          diseño utilizado puede verlo
        </p>
        <a
          href="https://www.figcomponents.com?id=628da6a6447e20d4bf9c6aa2"
          target="_blank"
        >
          Aquí!! en Figcomponents
        </a>
      </div>
    </footer>
  );
}

export default Footer;
