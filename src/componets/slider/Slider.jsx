import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slider.module.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

export default function MySlider() {
    const slides = [
        "https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1601360618_47e471bb4370492ba90ac6abc6247878.jpeg",
        "https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1638520281_1ec578e4cfa24a18854d5ffcfcf2f3ca.jpeg",
        "https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1601360618_47e471bb4370492ba90ac6abc6247878.jpeg",
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="container">
            <Slider className={css.wrapper} {...settings}>
                {slides.map((item) => <img key={item} src={item} alt="#" />)}
            </Slider>
        </div>
    )
}
