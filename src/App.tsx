import { useEffect, useState } from "react";
import Header from "./components/Header/header.component";
import CharactersSection from "./containers/CharactersSection/characters-section.container";
import Footer from "./containers/Footer/footer.container";
import NameHeader from "./containers/NameHeader/name-header.container";
import { api } from "./api";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async (url?: string) => {
      const {results} = await api(url);

      setData(results);
    };

    fetch();
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <NameHeader />
      <CharactersSection data={data} />
      <Footer />
    </div>
  );
}

export default App;
