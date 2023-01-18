import './style.scss';
import icon from "./header_icon/frame.svg";
function Header() {
    return (
        <div className='header'>

            <div className="header_icon">
                <img src={icon} alt="swell"/>
            </div>
            <div className="header_text">
                <p>Why Swell?</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>

            <div className="button-text">
                <p>Start free trial </p>
                <button className="button">Log in</button>
            </div>


        </div>
    )
}
export default Header;