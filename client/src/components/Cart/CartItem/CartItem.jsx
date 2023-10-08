import { MdClose } from "react-icons/md";
import check from "../../../assets/products/watch-prod-1.webp";
import "./CartItem.scss";


const CartItem = () => {
    return (
       <div className="cart-products">
          <div className="cart-product">
            <div className="img-container">
              <img src={check} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product details</span>
                <MdClose className="closeBtn" />
                <div className="quantity-container">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>x</span>
                    <span>&#8377; 9089</span>
                </div>
            </div>
          </div>
       </div>
    )
};

export default CartItem;
