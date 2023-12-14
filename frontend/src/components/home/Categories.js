import React from "react";
import "src/css/home/Categories.scoped.css";
import acc_cameras from "src/assets/categories/acc-cameras.jpeg";
import cameras from "src/assets/categories/cameras.jpeg";
import acc_lumieres from "src/assets/categories/acc-lumieres.jpeg";
import lumieres from "src/assets/categories/lumieres.jpeg";
import apples from "src/assets/categories/apples.jpeg";
import audios from "src/assets/categories/audios.jpeg";
import flashs from "src/assets/categories/flashs.jpeg";
import optiques from "src/assets/categories/optiques.jpeg";

function Categories() {
    return (
        <div className="categories-background">
            <h1>NOTRE CATALOGUE</h1>
            <div className="categories-content">
                <a href="/" className="categories-item">
                    <img src={cameras} alt="Caméras" />
                    <div className="categories-bottom">
                        <p>Caméras</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={acc_cameras} alt="Accessoires pour caméras" />
                    <div className="categories-bottom">
                        <p>Accessoires pour caméras</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={lumieres} alt="Lumières" />
                    <div className="categories-bottom">
                        <p>Lumières</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={acc_lumieres} alt="Accessoires pour lumières" />
                    <div className="categories-bottom">
                        <p>Accessoires pour lumières</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={apples} alt="Apples" />
                    <div className="categories-bottom">
                        <p>Apples</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={audios} alt="Audios" />
                    <div className="categories-bottom">
                        <p>Audios</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={flashs} alt="Flashs" />
                    <div className="categories-bottom">
                        <p>Flashs</p>
                    </div>
                </a>
                <a href="/" className="categories-item">
                    <img src={optiques} alt="Optiques" />
                    <div className="categories-bottom">
                        <p>Objectifs</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Categories;
