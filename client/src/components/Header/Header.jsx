import { useState,useEffect,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import {TbSearch} from 'react-icons/tb';
import {CgShoppingCart} from 'react-icons/cg';
import {AiOutlineHeart} from 'react-icons/ai';
import Search from "./Search/Search.jsx";
import Cart from '../Cart/Cart.jsx';
import { Context } from "../../utils/AppContext.jsx";

import "./Header.scss";

const Header = () => {
    const [scroll,setScroll] = useState(true);
    const [showCart, setShowCart] = useState(false);

    const handleScroll = () => {
        const offSet = window.screenY;
        if(offSet > 200) {
                setScroll(false)  
        }else {
            setScroll(true)
        }
    }
    // 
   

    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    },[]);

    return (
    <>
     <header className={`main-container ${scroll ? 'sticky-header': ""}`}>
        <div className="header-container">
            <div className="center">E-Commerce-Web</div>
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
            </ul>
            <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart onClick={() => setShowCart(true)}/>
                    <span>3</span>
                </span>
            </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} onClick={() => setShowCart(false)} />}
    </>
    )
};

export default Header;
