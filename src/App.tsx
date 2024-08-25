import Header from "./components/Header/header.component";
import CharactersSection from "./containers/CharactersSection/characters-section.container";
import NameHeader from "./containers/NameHeader/name-header.container";

function App() {
  return (
    <div>
      <Header />
      <NameHeader />
      <CharactersSection />
    </div>
  );
}

export default App;
