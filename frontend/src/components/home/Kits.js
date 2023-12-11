import React from "react";
import "src/css/home/Kits.scoped.css";
import captation from "src/assets/kits/captation.png";
import captation_tec from "src/assets/kits/captation-tec.png";
import interview from "src/assets/kits/interview.png";
import dji from "src/assets/kits/dji.png";
import podcast from "src/assets/kits/podcast.png";
import red from "src/assets/kits/red.png";
import camera from "src/assets/categories/cameras.jpeg";

function Kits() {
    return (
        <div className="kits-background">
            <div className="kits-content">
                <h1>Nos Kits prêts à tourner</h1>
                <div className="kits-line">
                    <h2>Je veux tourner...</h2>
                    <a href="/" className="kits-box">
                        <h3>Une interview</h3>
                        <img src={interview} alt="interview" />
                        <p>
                            199€<small>HT/J.</small>
                        </p>
                    </a>
                    <a href="/" className="kits-box">
                        <h3>Une captation</h3>
                        <img src={captation} alt="captation" />
                        <p>
                            149€<small>HT/J.</small>
                        </p>
                    </a>
                    <a href="/" className="kits-box">
                        <h3>Une captation avec technicien</h3>
                        <img src={captation_tec} alt="captation-tec" />
                        <p>
                            499€<small>HT/J.</small>
                        </p>
                    </a>
                    <a href="/" className="kits-box">
                        <h3>Un podcast video</h3>
                        <img src={podcast} alt="podcast" />
                        <p>
                            229€<small>HT/J.</small>
                        </p>
                    </a>
                </div>
                <div className="kits-line">
                    <h2>Je veux tourner avec...</h2>
                    <a href="/" className="kits-box">
                        <h3>Sony FX3</h3>
                        <img src={camera} alt="camera" />
                        <p>
                            139€<small>HT/J.</small>
                        </p>
                    </a>
                    <a href="/" className="kits-box">
                        <h3>DJI Ronin 4D</h3>
                        <img src={dji} alt="interview" />
                        <p>
                            329€<small>HT/J.</small>
                        </p>
                    </a>
                    <a href="/" className="kits-box">
                        <h3>RED Gemini 5K</h3>
                        <img src={red} alt="red" />
                        <p>
                            350€<small>HT/J.</small>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Kits;
