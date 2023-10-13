import { useEffect, useContext } from "react";
import "./Home.scss";
import Products from "../Products/Products.jsx";
import Banner from "./Banner/Banner.jsx";
import Category from "./Category/Category.jsx";
import { fetchDataFormApi } from "../../utils/Api.js";
import { Context } from "../../utils/Context.js";


const Home = () => {
    const { categories,
        setCategories,
        products,
        setProducts
    } = useContext(Context);

    useEffect(() => {
        getProducts()
        getCategories();
    }, [])

    const getProducts = () => {
        fetchDataFormApi("/api/products?populate=*").then(res => {
            // console.log(res)
            setProducts(res)
        })
    }
    const getCategories = () => {
        fetchDataFormApi("/api/categories").then(res => {
            // console.log(res)
            setCategories(res)
        })
    }
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} headingText="Popular Products" />
            </div>
        </div>
    </div>;
};

export default Home;
