import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProducts/RelatedProducts.jsx";
import {
     FaFacebook,
     FaLinkedin,
     FaInstagram,
     FaTwitter,
     FaPinterest,
     FaCartPlus
    } from "react-icons/fa";
import item from "../../assets/products/watch-prod-1.webp"

const SingleProduct = () => {
    return (
        <div className="singleProduct-container">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={item} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Italian watch</span>
                        <span className="price">&#8377; 3999.00</span>
                        <span className="description">This watch made by "italian jumbo company" and in this watch used matarial steel and iron</span>
                        <div className="cart-button">
                            <div className="quantity-button">
                                <span>-</span>
                                <span>50</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart">
                                <FaCartPlus size="20" />
                                Add To Cart
                            </button>
                        </div>
                        <span className="divider"/>
                        <div className="info-item">
                            <span className="text-bold">
                                Categories:
                                <span>Watch</span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaLinkedin size="20" />
                                    <FaFacebook size="20" />
                                    <FaInstagram size="20" />
                                    <FaTwitter size="20" />
                                    <FaPinterest size="20" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProduct />
            </div>
        </div>
    )
};

export default SingleProduct;
