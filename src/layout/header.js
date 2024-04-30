const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ backgroundColor: '#8B4513', padding: '20px' }}>
        <h1 style={{ margin: '0 auto', fontSize: '4rem', color: '#FF9033' }}>
          ESTILO FASHION <i className="bi bi-bag"></i>
        </h1>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <i data-feather="home"></i>
          <i className="bi bi-house-door"></i><a className="navbar-brand" href="#">INICIO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i data-feather="arrow-up-right"></i>HOMBRE
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i data-feather="arrow-down"></i>MUJER
                </a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i data-feather="grid"></i>CATEGORIAS
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">CAMISETAS</a></li>
                  <li><a className="dropdown-item" href="#">PANTALONES</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">VESTIDOS</a></li>
                </ul>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <i data-feather="gift"></i>OFERTAS
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
            <i className="w-25" data-feather="search"></i>
              <input className="form-control me-2" type="search" placeholder="Buscar producto" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
