import React from "react";
import "src/css/home/Devis.scoped.css";

function Devis() {

    React.useEffect(() => {
    document.getElementById("selected-button-1").onclick = function () {
        document.getElementById("selected-file-1").click();
    };

    document.getElementById("selected-button-2").onclick = function () {
        document.getElementById("selected-file-2").click()
    }
    }
    , []);

    return (
        <div className="devis-background">
            <div className="devis-content">
                <h1>VITE. UN DEVIS !</h1>
                <div className="devis-forms">
                    <form className="devis-form" action="/devis" method="post">
                        <h1>J'AI UNE LISTE DE MATÉRIEL.</h1>

                        <h3>
                            Une liste caméra, lumière ? Uploadez-la et recevez
                            un devis !
                        </h3>

                        <div className="devis-form-line">
                            <div className="devis-input-label">
                                <label>Nom</label>
                                <input type="text" />
                            </div>
                            <div className="devis-input-label">
                                <label>Numéro de téléphone</label>
                                <input type="tel" />
                            </div>
                        </div>

                        <div className="devis-form-line">
                            <div className="devis-input-label">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className="devis-input-label">
                                <label>Votre liste de matériel</label>
                                <input id="selected-file-1" type="file" />
                                <input value={"Choisir un fichier"} id="selected-button-1" type="button" />
                            </div>
                        </div>

                        <textarea
                            className="devis-form-precision"
                            placeholder="UNE PRÉCISION À APPORTER ?"
                            
                        />
                        <input
                            type="submit"
                            className="devis-submit button-basic"
                            value="Je veux un devis!"
                        />
                    </form>

                    <form className="devis-form" action="/devis" method="post">
                        <h1>JE NE SAIS PAS CE QU'IL ME FAUT.</h1>

                        <h3>
                            Décrivez nous votre projet. Uploadez-le et recevez
                            un devis !
                        </h3>

                        <div className="devis-form-line">
                            <div className="devis-input-label">
                                <label>Nom</label>
                                <input type="text" />
                            </div>
                            <div className="devis-input-label">
                                <label>Numéro de téléphone</label>
                                <input type="tel" />
                            </div>
                        </div>

                        <div className="devis-form-line">
                            <div className="devis-input-label">
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className="devis-input-label">
                                <label>Insérez votre fichier</label>
                                <input value={"Choisir un fichier"} id="selected-button-2" type="button" />
                                <input id="selected-file-2" type="file" />
                            </div>
                        </div>

                        <textarea
                            className="devis-form-precision"
                            rows="3"
                            placeholder="DONNEZ NOUS UN MAX D'INFOS SUR CE QUE VOUS VOULEZ RÉALISER !"
                        />
                        <input
                            type="submit"
                            className="devis-submit button-basic"
                            value="Je veux un devis!"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Devis;
