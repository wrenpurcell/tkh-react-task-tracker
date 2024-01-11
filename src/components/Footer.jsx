import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
return (
  <footer>
    <div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <p>&copy; 2024 Your Company</p>
  </footer>
);
}
