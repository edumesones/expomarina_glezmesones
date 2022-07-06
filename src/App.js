import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const title = "Titulo de Tienda";
  const data = {
    title: title,
    amount: 4,
    greeting: "¡Saludo desde data!",
  };
  return (
    <>
      <NavBar data={data} />
    </>
 );
}

export default App;
