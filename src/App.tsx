import Header from "./components/Header/header.component";
import CharactersSection from "./containers/CharactersSection/characters-section.container";
import Footer from "./containers/Footer/footer.container";
import NameHeader from "./containers/NameHeader/name-header.container";

function App() {
  return (
    <div>
      <Header />
      <NameHeader />
      <CharactersSection />
      <Footer />
    </div>
  );
}

export default App;
