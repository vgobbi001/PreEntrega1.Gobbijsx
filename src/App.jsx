import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

// import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
// import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <ItemListContainer greetings="Bienvenidos a nuestra página oficial de cosmeticos" />
      </>
    </div>
  );
}

export default App;
