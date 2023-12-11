import React from "react";
import "src/css/home/Security.scoped.css";
import payment from "src/assets/payment.png";
import chariot from "src/assets/chariot.png";

function Security() {
    return (
        <div className="security-background">
            <div className="security-content">
                <div className="security-left">
                    <h1>100% EN LIGNE.</h1>
                    <h1>
                        EN TOUTE <span>SÉCURITÉ</span>
                    </h1>
                    <h2>OU DANS NOTRE BOUTIQUE.</h2>
                    <ul>
                        <li>100% digital et <b>(super)</b> simple.</li>
                        <li>Réservation sans CB.</li>
                        <li>
                            Boutique à Saint-Ouen-sur-Seine (venez tester notre
                            matériel !)
                        </li>
                        <li>
                            Des tarifs bas, pour un matériel en parfait état.
                        </li>
                        <li>
                            +700 références Sony, Canon, RED, Arri, Aputure,
                            etc.
                        </li>
                    </ul>
                </div>
                <div className="security-right">
                    <div className="security-right-box">
                        <img src={chariot} alt="chariot" />
                        <p>CRÉEZ VOTRE PANIER EN QUELQUES CLICKS</p>
                    </div>
                    <div className="security-right-box">
                        <img src={payment} alt="payment" />
                        <p>PAYEMENT EN LIGNE SÉCURISÉ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Security;
