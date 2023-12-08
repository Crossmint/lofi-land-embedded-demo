const Navbar = () => {
  return (
    <>
      <div className="demo-band">
        Experience Crossmint's Embedded Checkout Demo
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark px-3 mt-4">
        <div className="container-fluid mb-5">
          <a className="navbar-brand" href="/">
            <img src="/logo.svg" className="logo" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://github.com/crossmint/lofi-land-embedded-demo"
                >
                  Github Repo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  target="_blank"
                  href="https://www.crossmint.com/products/nft-checkout"
                >
                  Integrate Payments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
