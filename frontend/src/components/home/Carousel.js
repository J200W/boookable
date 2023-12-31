// import { useState } from "react";
import "src/css/Carousel.scoped.css";

function Carousel({ photos }) {
    return (
        <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                {photos.map((photo, index) => {
                    return (
                        <li
                            key={index}
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={index === 0 ? "active" : ""}
                        />
                    );
                })}
            </ol>
            <div className="carousel-inner">
                {photos.map((photo, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index === 0
                                    ? "carousel-item active"
                                    : "carousel-item"
                            }
                        >
                            <img
                                src={photo}
                                alt={index}
                            />
                        </div>
                    );
                })}
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
