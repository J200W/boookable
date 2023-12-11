import React from "react";
import "src/css/home/Companies.scoped.css";
import boookable_logo from "src/assets/logo.png";
import superdry from "src/assets/companies/superdry.png";
import accor from "src/assets/companies/accor.png";
import google from "src/assets/companies/google.png";
import radio_canada from "src/assets/companies/radio-canada.png";
import dyson from "src/assets/companies/dyson.png";
import dior from "src/assets/companies/dior.png";

function Companies() {
    return (
        <div className="companies-background">
            <div className="companies-title">
                <div className="companies-title-first-part">
                    <h1 className="companies-title-text in">IN</h1>
                    <img src={boookable_logo} alt="boookable_logo" />
                </div>
                <h1 className="companies-title-text">
                    THEY <span>THRUST</span> .
                </h1>
            </div>
            <div className="companies-content">
                <div href="/" className="companies-item">
                    <img src={superdry} alt="superdry" />
                </div>
                <div href="/" className="companies-item">
                    <img src={accor} alt="accor" />
                </div>
                <div href="/" className="companies-item">
                    <img src={google} alt="google" />
                </div>
                <div href="/" className="companies-item">
                    <img src={radio_canada} alt="radio_canada" />
                </div>
                <div href="/" className="companies-item">
                    <img src={dyson} alt="dyson" />
                </div>
                <div href="/" className="companies-item">
                    <img src={dior} alt="dior" />
                </div>
            </div>
            <div className="success">
                <div className="success-item">
                    <h1>15+</h1>
                    <p>AMAZING BOITE DE PROD'</p>
                </div>
                <div className="success-item">
                    <h1>10+</h1>
                    <p>CRAZY CHEF OP'</p>
                </div>
                <div className="success-item">
                    <h1>100+</h1>
                    <p>INCROYABLES VIDÉASTES</p>
                </div>
                <div className="success-item">
                    <h1>20+</h1>
                    <p>SUPER MARKETEURS</p>
                </div>
                <div className="success-item">
                    <h1>10+</h1>
                    <p>ROCKET START'UP</p>
                </div>
                <div className="success-item">
                    <h1>5+</h1>
                    <p>GLORIOUS COURTS-MÉTRAGES</p>
                </div>
            </div>
        </div>
    );
}

export default Companies;
