import logo from "../../assets/logo.svg";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" />
      <ul className={styles.menu}>
        <li>Docs</li>
        <li>About</li>
        <button className={styles.btn}>Support us</button>
      </ul>
    </header>
  );
};

export default Header;
