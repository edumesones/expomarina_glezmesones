import ItemCount from "./itemcount";

const Carta = ({ tipo, precio }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{tipo}</h5>
          <p className="card-text">{precio}</p>
        </div>
        <ItemCount />;
      </div>
    );
  };
  
  export default Carta;