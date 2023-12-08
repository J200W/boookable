import React from "react";
import "src/css/NavBar.css";
import logo from "src/assets/logo.png";
import category from "src/data/category";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-background">
                <nav className="nav-bar-content">
                    <div className="nav-bar-up">
                        <img src={logo} alt="logo" className="nav-bar-logo" />
                        <div className="nav-bar-search">
                            <input
                                className="nav-bar-search-input"
                                type="text"
                                placeholder="Que cherches-tu ?"
                            />
                            <label className="nav-bar-search-label">
                                <button
                                    className="nav-bar-search-button"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg>
                                </button>
                            </label>
                        </div>
                        <div className="nav-bar-links">
                            <a
                                href="//devis-location-de-materiel-audiovisuel"
                                className="nav-bar-link full-light-blue"
                            >
                                Devis
                            </a>
                            <a
                                href="//devis-location-de-materiel-audiovisuel"
                                className="nav-bar-link empty-light-blue"
                            >
                                Contacts
                            </a>
                        </div>
                    </div>
                    <div className="nav-bar-down">
                        <ul className="nav-bar-down-list">
                            {category.map((cat, index) => (
                                <li className="nav-bar-down-list-item">
                                    <a href="/" className="nav-bar-dropbtn">
                                        {cat.section}
                                    </a>
                                    <div className="mega-background">
                                        <div className="mega-box">
                                            <div className="mega-content">
                                                {cat.mega_box.map(
                                                    (mega_box) => (
                                                        <div className="mega-row">
                                                            <div className="mega-category">
                                                                <a href="/">
                                                                    {
                                                                        mega_box.category
                                                                    }
                                                                </a>
                                                            </div>
                                                            <ul className="mega-links">
                                                                {mega_box.links.map(
                                                                    (link) => (
                                                                        <li >
                                                                            <a
                                                                                className="mega-link"
                                                                                href={
                                                                                    link.url
                                                                                }
                                                                            >
                                                                                {
                                                                                    link.name
                                                                                }
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="empty-space"></div>
        </div>
    );
}

export default NavBar;
