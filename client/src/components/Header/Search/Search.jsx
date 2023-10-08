import { MdClose } from "react-icons/md";
import "./Search.scss";
import check from "../../../assets/products/watch-prod-3.webp"

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-model">
            <div className="search-field">
                <input type="text" placeholder="Search Product" autoFocus />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={check} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product details</span>
                            <span className="desc">product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
