import "./Category.scss";
import cart1 from '../../../assets/category/cat-1.jpg'
import cart2 from '../../../assets/category/cat-2.jpg'
import cart3 from '../../../assets/category/cat-3.jpg'
import cart4 from '../../../assets/category/cat-4.jpg'

const Category = ({ categories }) => {


    return (
        <div className="shop-category">
            <div className="categories">
                {/* {categories.data.Map((item) => {
                    return <div key={item.id} className="category">
                        <img src={process.env.REACT_APP_DEV_URL + item.attributes
                            .img.data.attributes.url} alt="category" />
                    </div>
                })} */}
                <img src={cart1} alt="" />
            </div>
        </div>
    )
};

export default Category;
