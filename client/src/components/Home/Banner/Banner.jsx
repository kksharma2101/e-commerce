import "./Banner.scss";
import bannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Sales</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, mollitia? Omnis ea magnam quae culpa sed maxime repellendus nostrum fuga.
                </p>
                <div className="other-content">
                    <p className="read">Read more</p>
                    <p className="shop">Shop now</p>
                </div>
            </div>
            <img src={bannerImg} alt="banner" className="banner-img" />
        </div>
    </div>;
};

export default Banner;
