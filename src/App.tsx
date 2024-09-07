import { useEffect, useState } from "react";
import Header from "./components/Header/header.component";
import CharactersSection from "./containers/CharactersSection/characters-section.container";
import Footer from "./containers/Footer/footer.container";
import NameHeader from "./containers/NameHeader/name-header.container";
import { api } from "./api";

function App() {
  const [data, setData] = useState({
    results: [],
    info: { count: 0, next: "", prev: "", pages: 0 },
  });

  const fetch = async (url?: string) => {
    const data = await api(url);

    setData(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const fetchNextPage = async (url: string) => {
    fetch(url);
  };

  const fetchPreviousPage = async (url: string) => {
    fetch(url);
  };

  console.log(data);

  return (
    <div>
      <Header />
      <NameHeader />
      <CharactersSection
        data={data}
        fetchNextPage={(url) => fetchNextPage(url)}
        fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
      <Footer />
    </div>
  );
}

export default App;
