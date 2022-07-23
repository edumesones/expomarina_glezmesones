import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { tipo, stock, precio, id } = item;
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{tipo}</h5>
        <h5 className="card-title">{precio}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <Link to={`item/${id}`}>
          <button className="btn btn-primary">See product details</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;