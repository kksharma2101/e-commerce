import Products from "../Products/Products.jsx";
import Banner from "./Banner/Banner.jsx";
import Category from "./Category/Category.jsx";

import "./Home.scss";
const Home = () => {
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                 <Category />
                 <Products headingText="Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;
