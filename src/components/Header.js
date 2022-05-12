import { Link } from "react-router-dom";
import { HeaderTop } from "../styles/Header.Styled";
import logo from "../assets/scribble.png"
import logUser from "../assets/Avatar-12.svg"
import mobMenu from "../assets/mobile-menu.png";

const Header = () => {
    return ( 
        <HeaderTop>
            <div className="flex-center">
                <div className="header--tile">
                    <div className="mobile--menu">
                        <button><img src={mobMenu} /></button>
                        
                    </div>
                    <img src={logo} alt="" />
                    <h2>Scribble</h2>
                </div>
                <nav className="header--nav">
                    <Link to="/Inspiration">Inspiration</Link>
                    <Link to="/Marketpace">Marketpace</Link>
                    <Link to="/Find-work">Find Work</Link>
                    <Link to="/Hire-designers">Hire Designers</Link>
                </nav>
            </div>
            <div className="header--user">
                <div className="header__user__info">
                    <h4>Jhon max</h4>
                    <span>jhonmax@email.com</span>
                </div>
                <img src={logUser} alt="" />
                
            </div>
        </HeaderTop>
     );
}
 
export default Header;