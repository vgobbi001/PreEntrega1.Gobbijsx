import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

// import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
// import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <ItemListContainer greetings="Bienvenidos a nuestra licorería oficial" />
      </>
    </div>
  );
}

export default App;
