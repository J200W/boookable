import React from "react";
import "src/css/TheFooter.scoped.css";
import logo from "src/assets/logo.png";

function TheFooter() {
    const year = new Date().getFullYear();
    return (
        <div className="footer-background">
            <a href="/">
                <img src={logo} alt="logo" />
            </a>
            <div className="footer-content">
                <div className="footer-content-left">
                    <p>8 rue Godillot, 93 400, Saint-Ouen, France.</p>
                    <p>33 1 87 66 24 84</p>
                    <a href="mailto:hello@boookable.com?subject=Hello%20Boookable%2C%20j'ai%20une%20question%20!">
                        ‍Hello@boookable.com
                    </a>
                    <div>
                        <a href="/">
                            <i className="fab fa-facebook-square" />
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram" />
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="/">
                            <i className="fab fa-linkedin" />
                        </a>
                        <a href="/">
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                    <p>© {year} Boookable. All rights reserved.</p>
                </div>
                <div className="footer-content-center">
                    <a href="/">A propos de nous</a>
                    <a href="/">Questions Fréquentes</a>
                    <a href="/">Conditions Générales</a>
                    <a href="/">Mentions Légales</a>
                    <a href="/">Gestion des données personnelles</a>
                    <a href="/">Gestion des Cookies</a>
                </div>
                <div className="footer-content-right">
                    <a href="/">Location matériel audiovisuel Marseille</a>
                    <a href="/">Location matériel audiovisuel Nice</a>
                    <a href="/">Location matériel audiovisuel Toulouse</a>
                    <a href="/">Location matériel audiovisuel Nantes</a>
                </div>
            </div>
        </div>
    );
}

export default TheFooter;
