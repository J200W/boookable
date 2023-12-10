import React from "react";
import "src/css/NavBar.scoped.css";
import logo from "src/assets/logo.png";
import category from "src/data/category_fr";
import "@fortawesome/fontawesome-free/css/all.css";

function NavBar() {
    const handleClickNav = () => {
        const nav = document.getElementsByClassName("nav-bar-down-list")[0];
        const button = document.getElementsByClassName("fa")[0];
        const display = nav
            .computedStyleMap()
            .get("display")
            .toString();
        if (display === "none") {
            nav.setAttribute("style", "display: flex;");
            button.className = "fa fa-times";
        } else {
            nav.setAttribute("style", "display: none;");
            button.className = "fa fa-bars";
        }
    };

    // check when the window is resized
    window.addEventListener("resize", () => {
        const nav = document.getElementsByClassName("nav-bar-down-list")[0];
        const button = document.getElementsByClassName("fa")[0];
        if (window.innerWidth > 1038) {
            nav.setAttribute("style", "display: flex;");
            button.className = "fa fa-times";
        }
    });

    return (
        <div className="nav-bar">
            <div className="nav-bar-background">
                <nav className="nav-bar-content">
                    <div className="nav-bar-up">
                        <a href="/">
                            <img
                                src={logo}
                                alt="logo"
                                className="nav-bar-logo"
                            />
                        </a>
                        <div id="nav-bar-search-top" className="nav-bar-search">
                            <input
                                className="nav-bar-search-input"
                                type="text"
                                placeholder="Que cherches-tu ?"
                            />
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
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="nav-bar-links">
                            <a
                                href="https://www.boookable.com/devis-location-de-materiel-audiovisuel"
                                className="nav-bar-link empty-light-blue"
                            >
                                Devis
                            </a>
                            <a
                                href="//devis-location-de-materiel-audiovisuel"
                                className="nav-bar-link full-light-blue"
                            >
                                Contacts
                            </a>
                        </div>
                        <button
                            className="hamburger-btn"
                            onClick={handleClickNav}
                        >
                            <i className="fa fa-bars" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="nav-bar-down">
                        <ul className="nav-bar-down-list">
                            {category.map((cat, index) => (
                                <li
                                    className="nav-bar-down-list-item"
                                    key={index}
                                >
                                    <a href="/" className="">
                                        {cat.section}
                                    </a>
                                    <div className="mega-background">
                                        <div className="mega-box">
                                            <div className="mega-content">
                                                {cat.mega_box.map(
                                                    (mega_box, index) => (
                                                        <div
                                                            className="mega-row"
                                                            key={index}
                                                        >
                                                            <div className="mega-category">
                                                                <a href="/">
                                                                    {
                                                                        mega_box.category
                                                                    }
                                                                </a>
                                                            </div>
                                                            <ul className="mega-links">
                                                                {mega_box.links.map(
                                                                    (
                                                                        link,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
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
                            <div className="nav-bar-down-list-item nav-extra">
                                <a href="/">
                                    Devis
                                </a>
                            </div>
                            <div className="nav-bar-down-list-item nav-extra">
                                <a href="/">
                                    Contacts
                                </a>
                            </div>
                        </ul>
                    </div>
                    <div id="nav-bar-search-down" className="nav-bar-search">
                            <input
                                className="nav-bar-search-input"
                                type="text"
                                placeholder="Que cherches-tu ?"
                            />
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
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
                                </svg>
                            </button>
                        </div>
                </nav>
            </div>
            <div className="empty-space" />
        </div>
    );
}

export default NavBar;
