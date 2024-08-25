import rick from "../../assets/rick.png";
import styles from "./characters-card.module.scss";

const CharactersCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={rick} alt="imagem-do-personagem" />
      <div className={styles.cardContent}>
        <h2>Slow Rick</h2>
        <div>
          <div></div>
          <span className={styles.cardStatus}>Alive - Human</span>
        </div>
        <div className={styles.cardSections}>
          <span>Last known location:</span>
          <p>Citadel of Ricks</p>
        </div>
        <div className={styles.cardSections}>
          <span>First seen in:</span>
          <p>The Ricklantis Mixup</p>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
