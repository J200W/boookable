import React from "react";
import Carousel from "src/components/home/Carousel";
import "src/css/Presentation.scoped.css";

function Presentation() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-left-first-line">
                    <h1>Louez du matériel</h1>
                    <h2>Vidéo | Photo | Audio</h2>
                </div>
                <div className="header-left-second-line">
                    <h3>en quelques clics.</h3>
                </div>
                <div className="header-left-third-line">
                    <p id="header-left-bold">
                        <span>Livraison gratuite</span> à Paris & 10 km.
                    </p>
                    <p>Annulation 100% gratuite.</p>
                    <p>Réservation sans CB.</p>
                    <p>Tarifs dégressifs dès le 2e jour.</p>
                    <p>+700 références Sony, RED, Aputure.</p>
                </div>
                <div className="header-left-buttons">
                    <a
                        href="/"
                        className="button-basic button-yellow button-presentation"
                        role="button"
                        aria-pressed="true"
                    >
                        <p>J'AI UNE LISTE DE MATÉRIEL.</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                        >
                            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
                        </svg>
                    </a>
                    <a
                        href="/"
                        className="button-basic button-yellow button-presentation"
                        role="button"
                        aria-pressed="true"
                    >
                        <p>JE NE SAIS PAS CE QU'IL ME FAUT.</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                        >
                            <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="header-right">
                <Carousel />
            </div>
        </div>
    );
}

export default Presentation;
