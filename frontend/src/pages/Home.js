import "../css/Home.css";
import React from "react";
import NavBar from "src/components/basic/NavBar";
import photo from "src/assets/photo-1.png";

function Home() {
    return (
        <div>
            <NavBar />
            <div className="header">
                <div className="header-left">
                    <h1>Louez du matériel</h1>
                    <h2>Vidéo | Photo | Audio</h2>
                    <h3>en quelques clics.</h3>
                    <p id="header-left-bold">
                        <span>Livraison gratuite</span> à Paris & 10 km.
                    </p>
                    <p> Annulation 100% gratuite.</p>
                    <p>Réservation sans CB.</p>
                    <p>Tarifs dégressifs dès le 2e jour.</p>
                    <p>+700 références Sony, RED, Aputure.</p>
                </div>
                <div className="header-right">
                    <img src={photo} alt="header-right" />
                </div>
            </div>
        </div>
    );
}

export default Home;
