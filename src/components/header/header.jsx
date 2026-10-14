import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import "./header.css";
function Header() {
  return (
    <div className="header-container">
      <img src="/src/assets/logo.png" alt="Logo" />
      <ul>
        <li>
          <div className="about-app-heading buttons">
            <p>About App</p>
            <div className="app-info info">
              <p>
                My Todo List App is a simple Todo list App to Organize your
                tasks, stay focused, and complete your work on time.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="about-dev-heading buttons">
            <p>About Developer</p>
            <div className="dev-info info">
              <p>
                A developer who is Passionate about clean code, intuitive UI,
                and creative design.
              </p>
            </div>
          </div>
        </li>
        <li>
          <a href="https://github.com/M-Mughees-Alvi" target="_main">
            <RiGithubFill size={36} className="links" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mughees-alvi/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxFill size={36} className="links" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
