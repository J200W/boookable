// import { useState } from "react";
import photo_1 from "src/assets/photo-1.png";
import photo_2 from "src/assets/photo-2.png";
import photo_3 from "src/assets/photo-3.png";
import photo_4 from "src/assets/photo-4.png";
import "src/css/Carousel.scoped.css";

function Carousel() {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex);
    // };
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                />
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={photo_1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src={photo_2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src={photo_3} alt="Third slide" />
                </div>
                <div className="carousel-item">
                    <img src={photo_4} alt="Fourth slide" />
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
                <span className="sr-only" />
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                />
                <span className="sr-only" />
            </a>
        </div>
    );
}

export default Carousel;
