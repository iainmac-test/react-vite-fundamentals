import logo from "../assets/GlobalLogo.png"
import {logo as logoClass, subtitle} from "./banner.module.css"


const Banner = ({headerText}) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} className={logoClass} alt="logo" />
            </div>
            <div className={`col-7 mt-5 ${subtitle}`}>
            {headerText}
            </div>
        </header>        
    );
}

export default Banner;