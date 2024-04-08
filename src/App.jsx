import SearchBar from "./components/search-bar";
import searchImages from "./api";

function App() {
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
