import {MdClose} from "react-icons/md";
// import {BsCartX} from "react-icons/bs";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem.jsx";


const Cart = ({setShowCart}) => {
    return (
    <div className="cart-panel">
        <div className="opec-layer"></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="close">Close</span>
                </span>
            </div>
            {/* <div className="empty-cart">
                <BsCartX />
                <span>No product in the cart.</span>
                <button className="return-ts">Return to Shop</button>
            </div> */}
            <>
                  <CartItem />
                  <div className="cart-footer">
                    <div className="subTotal">
                        <span className="text">Subtotal</span>
                        <span className="text total">&#8377; 5999</span>
                    </div>
                    <div className="button">
                        <button className="checkout">Checkout</button>
                    </div>
                  </div>
            </>
        </div>
    </div>
    )
};

export default Cart;
