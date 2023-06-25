import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenido'}/>


    </div>
  );
}

export default App;
