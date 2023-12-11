import React from "react";
import "src/css/home/Reviews.scoped.css";
import logo from "src/assets/logo-square.png";

function Reviews() {
    const reviews = [
        "Amazing company, great customer service from Salem who answered my many urgent questions from London to Paris. He sorted a booking so quickly and the drop off/ pick up service is incredible. Thank you Salem!",
        "I just want to say thank you very much for the professional service you provide, the flexibility and the good reception. I will definitely come back to you with our next projects and I highly recommend you to anyone in Paris who wants to rent a filming equipments, these guys are the best so far.",
        "Super service, de très bon conseils et surtout super très bon rapport qualité prix 10/10 pour cette prestation",
        "Nous faisons appel régulièrement à Bookable, qui est un super prestataire. Salem et son équipe sont super pro et efficaces. Les produits proposés à la location sont de qualité et très variés. Je recommande vivement cette société qui est très fiable. Merci Bookable !",
        "Excellente expérience !! L'équipe est très serviable, compétente et le matériel de qualité, avec la livraison gratuite en plus, je recommande fortement",
        "Très bon service ! Un plaisir de travailler avec Salem et son équipe ! Délais de livraison respectés et service client au top ! Bravo !!",
        "Je recommande cette société de location, une équipe à l'écoute de ses clients, réactif, et des tarifs compétitif. Du matériel neuf et/ou en excellent état !",
        "Très bon service, matériel de qualité et équipe très réactive. Je recommande !",
        "Super service, très réactif et très pro. Je recommande !",
        "Très bonne expérience avec Bookable. J'ai loué un objectif canon 24-70.",
        "La version rf n'était plus disponible mais à la place j'ai la version ef avec bague d'adaptation. Salem est très dispo et toujours arrangeant. Les prix défient toute concurrence et les produits sont comme neufs. J'ai déjà réservé ma prochaine location d'objectif. Je recommande vivement. Un grand merci Salem et à bientôt...",
    ];

    return (
        <div className="reviews-background">
            <div className="reviews-container">
                <h1>NOS AVIS CLIENTS</h1>
                <div className="reviews-content">
                    {reviews.map((review, index) => {
                        return (
                            <a href="/" className="review" key={index}>
                                <div className="review-up">
                                    <img src={logo} alt="logo" />
                                    <div className="reviews-up-text">
                                        <h2>Username</h2>
                                        <p>25/12/2023</p>
                                    </div>
                                </div>
                                <div className="review-down">
                                    <h3>5 / 5</h3>
                                    <p className="review-down-text">{review}</p>
                                </div>
                                <p href="/" className="read-more">Read more</p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
