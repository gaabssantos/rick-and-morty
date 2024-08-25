import CharactersCard from "../../components/CharactersCard/characters-card.component";
import styles from "./characters-section.module.scss";

const CharactersSection = () => {
  return (
    <div className={styles.container}>
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
      <CharactersCard />
    </div>
  );
};

export default CharactersSection;
