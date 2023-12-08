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
                </div>
                <div className="header-right">
                    <img src={photo} alt="photo" />
                </div>
            </div>
        </div>
    );
}

export default Home;
