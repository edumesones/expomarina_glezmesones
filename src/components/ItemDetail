import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ItemDetail = ({ item }) => {
  const { setCartItems } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const { precio,tipo, id,stock,descripcion } = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, item]);
  };
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{tipo}</h5>
        <p className="card-text">{precio}</p>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">{`$${
          (precio * discount) / 100
        } | with a ${discount}% discount!`}</p>
      </div>
      {amount == 0 ? (
        <ItemCount stock={stock} initial={0} onAdd={onAdd} />
      ) : (
        <h1>{amount} serán comprados!!</h1>
      )}
      <div className="d-flex justify-content-center my-3">
        <Link to="/cart/">
          <button className="btn btn-warning">Go to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;