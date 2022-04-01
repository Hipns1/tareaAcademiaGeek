import FilterContainer from "../components/FilterContainer";
import Main from "../components/Main";
import { CardList } from '../components/CardList'

function App() {
  return (
    <div className="App">
      <Main/>
      <FilterContainer/>
      <CardList />
    </div>
  );

}
export default App;
