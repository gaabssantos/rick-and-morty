import styles from "./characters-card.module.scss";

type CharactersCardProps = {
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  image: string;
};

const CharactersCard = ({
  name,
  status,
  species,
  location,
  origin,
  image,
}: CharactersCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="imagem-do-personagem" />
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <div className={styles.statusCharacter}>
          <div
            className={
              status === "Alive" ? styles.aliveCircle : styles.deadCircle
            }
          ></div>
          <span className={styles.cardStatus}>
            {status} - {species}
          </span>
        </div>
        <div className={styles.cardSections}>
          <span>Last known location:</span>
          <p>{location.name}</p>
        </div>
        <div className={styles.cardSections}>
          <span>Origin:</span>
          <p>{origin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharactersCard;
