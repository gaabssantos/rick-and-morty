import CharactersCard from "../../components/CharactersCard/characters-card.component";
import styles from "./characters-section.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type CharactersProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  image: string;
};

type CharactersSectionProps = {
  data: CharactersProps[];
};

const CharactersSection = ({ data }: CharactersSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.charactersContainer}>
        {data.slice(0, 6).map((character) => (
          <CharactersCard
            name={character.name}
            status={character.status}
            species={character.species}
            location={character.location}
            origin={character.origin}
            image={character.image}
            key={character.id}
          />
        ))}
      </div>
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
