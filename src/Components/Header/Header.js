import { FaStore } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { FiSearch} from "react-icons/fi"
const Header = () => {
    return (
        <header className="header">
                <div className="header-logo">
                  <div className="logo"><FaStore/></div> 
                   <h3>eShop</h3>
                </div>
                
                 
                <div className="header-search">
                    <input type="text" name= "search" placeholder="Search" />
                    <div className="search-icon"><FiSearch/></div>
                    
                </div>


                     <div className="header-nav">
                     <div className="header-nav-signin">
                        <h5>hello Guest</h5>
                        <a href="">Login</a>

                     </div>

                     <div className="header-nav-your-shop">
                        <h5>your</h5>
                        <a href="">Shop</a>
                        
                     </div>
                    <div  className="header-nav-cart">
                    < MdShoppingBasket/>
                    <span className="a">0 </span>
                   </div>
                    
                    </div>
                
        </header>
    );
}

export default Header;