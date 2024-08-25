import CharactersCard from "../../components/CharactersCard/characters-card.component";
import styles from "./characters-section.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const CharactersSection = () => {
  return (
    <div className={styles.container}>
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <div className={styles.pagination}>
        <FaArrowLeft />
        <span>1</span>
        <span>2</span>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default CharactersSection;
