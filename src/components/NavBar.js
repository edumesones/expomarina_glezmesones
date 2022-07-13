import CartWidget from "./CartWidget";




const NavBar = (props) => {
    console.log(props);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{background:"red"}}>
          <a className="navbar-brand" href="#" style={{color:"white",font:"20px"}} >
            Expomarina S.L
          </a>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}} outline onClick={props.handlePrevious}>
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:"white"}}>
                  Donde estamos?
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color:"white"}}
                >
                  Promociones
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{color:"gray"}}>
                  <li>
                    <a className="dropdown-item" href="#" style={{color:"gray"}}>
                      Gasolina
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{color:"gray"}}>
                      Loteria
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" style={{color:"gray"}}>
                     Comida y bebida
                    </a>
                  </li>
                </ul>
              </li>
              <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}} outline onClick={props.handlePrevious}>
              <CartWidget />
              
              </a>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busca lo que necesites"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit" style={{background:"white",color:"red"}}>
                Pidenos lo que quieras
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;