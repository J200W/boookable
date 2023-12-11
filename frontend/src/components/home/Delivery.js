import React from "react";
import "src/css/Delivery.scoped.css";
import delivery from "src/assets/delivery.png";
function Delivery() {
    return (
        <div className="delivery-background">
            <div className="delivery-content">
                <div className="delivery-left">
                    <div className="delivery-left-up">
                        <h1>GAGNEZ DU TEMPS.</h1>
                    </div>
                    <div className="delivery-left-mid">
                        <h1>ON LIVRE TOUT.</h1>
                        <h1>GRATUITEMENT*.</h1>
                    </div>
                    <div className="delivery-left-down">
                        <p>
                            "On" livre et c'est vraiment NOUS qui livrons.
                            Chaque membre de l'équipe réalise directement des
                            livraisons auprès de nos clients.
                        </p>
                        <p>
                            C'est une personne qui connaît le matériel qui vous
                            livrera et pourra répondre à vos questions. C'est ça
                            notre définition du service client.
                        </p>
                        <div className="button-delivery-list">
                            <a
                                href="/"
                                className="button-basic button-delivery"
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
                                className="button-basic button-delivery"
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
                    <p>
                        *Paris et proche banlieue (première couronne) :
                        Livraison & Récupération 100% gratuite. Partout en
                        France ; Livraison & Récupération sur devis (à prix
                        raisonnable).
                    </p>
                </div>

                <div className="delivery-right">
                    <img src={delivery} alt="Delivery" />
                </div>
            </div>
        </div>
    );
}

export default Delivery;
