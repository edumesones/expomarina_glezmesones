import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/itemcount";

function App() {
  const title = "Titulo de Tienda";
  const data = {
    title: title,
    amount: 4,
    mensaje: "¡En un futuro incluiremos productos que podrá añadir!",
  };
  return (
    <>
      <NavBar data={data} />
      <ItemListContainer greeting={data.mensaje} />
      <ItemCount />

    </>
 );
}

export default App;

