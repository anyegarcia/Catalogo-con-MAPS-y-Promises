import logo from './logo.svg';
import CartWidget from './CartWidget';
function NavBar() {
  return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">
                  <img alt="logo" src={logo} style={{"width":"60px", "height":"60px", "marginLeft":"200px"}}/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav"
                style={{"marginLeft" : "65%"}}
                >
                    <li className="nav-item">
                    <div className="nav-link active" aria-current="page">Home</div>
                    </li>
                    <li className="nav-item">
                    <div class="nav-link">Features</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link">Pricing</div>
                    </li>
                    <li className="nav-item">
                    <div className="nav-link disabled" tabindex="-1" aria-disabled="true">
                    <CartWidget/>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  );
}
export default NavBar;