import React, { useState } from "react";
import "src/css/home/Reservation.scoped.css";
import rent from "src/assets/rent.png";
import { addDays } from "date-fns";
import Calendar from "../basic/Calendar";

function Reservation() {
    const today = new Date();
    const [state, setState] = useState([
        {
            startDate: today,
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);
    return (
        <div className="reservation-background">
            <div className="reservation-content">
                <div className="reservation-left">
                    <h1>N'hésitez plus !</h1>
                    <h2>Choisissez vos dates de réservation dès maintenant.</h2>
                    <Calendar state={state} setState={setState} />
                    <a
                        href="/"
                        className="button-basic button-reservation"
                        role="button"
                        aria-pressed="true"
                    >
                        Réserver
                    </a>
                </div>
                <div className="reservation-right">
                    <img src={rent} alt="Rent" />
                </div>
            </div>
        </div>
    );
}

export default Reservation;
