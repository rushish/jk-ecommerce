import '../Styles/desktopmenu.css';
import handleLogout from './logout';

const DesktopMenu = () => {
    <handleLogout />
    return (
        <div>
            <section className="menu">
                <ul className="main-menu">
                    <li className="menu-item"> <img src="" alt="menu-icon" /> Profile</li>
                    <li className="menu-item"> <img src="" alt="menu-icon" /> Home</li>
                    <li className="menu-item"> <img src="" alt="menu-icon" /> Products</li>
                    <li className="menu-item"> <img src="" alt="menu-icon" /> All Categories</li>
                    <li className="menu-item"> <img src="" alt="menu-icon" /> Cart</li>
                </ul>
            </section>
            <hr />
            <section className="logout">
                <li onClick={handleLogout}>Logout</li>
            </section>
        </div>
    );
}

export default DesktopMenu;