import { FooterBottom } from "../styles/Footer.Styles";
import logoGray from "../assets/scribble-gray-text.png"
import s1 from "../assets/s-1.png"
import s2 from "../assets/s-2.png"
import s3 from "../assets/s-3.png"
import s4 from "../assets/s-4.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <FooterBottom>
            <div className="flex-center flex-between">
                <div className="foot--desc">
                    <img src={logoGray} alt="" />
                    <p>The biggest designers <br/>community</p>
                    <div className="foot--social">
                        <img src={s1} alt=''/>
                        <img src={s2} alt=''/>
                        <img src={s3} alt=''/>
                        <img src={s4} alt=''/>
                    </div>
                </div>
                <div className="foot--nav">
                    <Link to="/Inspiration">Inspiration</Link>
                    <Link to="/Marketpace">Marketpace</Link>
                    <Link to="/Find-work">Find Work</Link>
                    <Link to="/Hire-designers">Hire Designers</Link>
                </div>
            </div>
            <div className="foot--copyright">
                <span>© 2022 SCribble. All rights reserved.</span>
            </div>
            
        </FooterBottom>
     );
}
 
export default Footer;