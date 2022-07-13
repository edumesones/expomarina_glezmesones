import { useState } from "react";
// Ponemos valores default a las props, ya que no funcionaría si nos olvidamos de enviarlas.
const ItemCount = ({ stock = 50, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (op) => {
    if (op === "eliminar" && count > 0) {
      setCount(count - 1);
    }
    if (op === "comprar" && count < stock) {
      setCount(count + 1);
    }
  };
  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };
  return (
    <>
      <div className="input-group input-spinner mb-3 d-flex justify-content-center">
        <input
          onChange={(e) => updateCountInput(e)}
          className="border-primary"
          placeholder=""
          value={count}
          type="number"
        />
        <button
          onClick={() => updateCount("eliminar")}
          className="btn btn-icon btn-primary"
          type="button"
        >
          Eliminar
        </button>
        <button
          onClick={() => updateCount("comprar")}
          className="btn btn-icon btn-primary"
          type="button"
        >
          Comprar
        </button>
      </div>
    </>
  );
};

export default ItemCount;