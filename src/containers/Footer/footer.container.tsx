import styles from "./footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCode } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.socialMedia}>
        <a href="https://github.com/gaabssantos" target="_blank">
          <li>
            <FaGithub />
          </li>
        </a>
        <a href="https://linkedin.com/in/gaabssantos" target="_blank">
          <li>
            <FaLinkedin />
          </li>
        </a>
      </ul>
      <span className={styles.devName}>
        <IoMdCode /> Gabriel Santos
      </span>
    </div>
  );
};

export default Footer;
