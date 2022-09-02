import '../stylesSheets/navBar.css';
import CarWidget from './CarWidget';

function NavBar() {
    return (
        <div className="container navBarContainer">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img
                        className='logo'
                        src="https://res.cloudinary.com/juandacloud/image/upload/v1662074760/reactJs-coder/dark-logo_umj92n.svg"
                        alt='logo' />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Essentials Oils</a></li>
                            <li><a className="dropdown-item" href="#">Peace and Nature</a></li>
                            <li><a className="dropdown-item" href="#">Services</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>

                <div className='carContainer'>
                    <CarWidget />
                    <p className='number'>5</p>
                </div>
            </header>
        </div>
    );
}

export default NavBar;