import CharactersCard from "../../components/CharactersCard/characters-card.component";
import Pagination from "../../components/Pagination/pagination.component";
import styles from "./characters-section.module.scss";

type CharactersProps = {
  id: number;
  name: string;
  status: string;
  species: string;
  location: { name: string };
  origin: { name: string };
  image: string;
};

export type CharactersSectionProps = {
  data: {
    results: CharactersProps[];
    info: { count: number; next: string; prev: string; pages: number };
  };
  fetchNextPage: (url: string) => void;
  fetchPreviousPage: (url: string) => void;
};

const CharactersSection = ({
  data,
  fetchNextPage,
  fetchPreviousPage,
}: CharactersSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.charactersContainer}>
        {data?.results?.slice(0, 6)?.map((character) => (
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
      <Pagination
        pagination={data?.info}
        fetchNextPage={fetchNextPage}
        fetchPreviousPage={fetchPreviousPage}
      />
    </div>
  );
};

export default CharactersSection;
