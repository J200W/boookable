import NavBar from "src/components/basic/NavBar";
import Presentation from "src/components/home/Presentation";
import Categories from "src/components/home/Categories";
import Companies from "src/components/home/Companies";
import Reviews from "src/components/home/Reviews";
import Delivery from "src/components/home/Delivery";
import Security from "src/components/home/Security";
import Devis from "src/components/home/Devis";
import Kits from "src/components/home/Kits";
import Reservation from "src/components/home/Reservation";
import TheFooter from "src/components/basic/TheFooter";


function Home() {
    return (
        <div>
            <NavBar />
            <Presentation />
            <Categories />
            <Companies />
            <Reviews />
            <Delivery />
            <Security />
            <Devis />
            <Kits />
            <Reservation />
            <TheFooter />
        </div>
    );
}

export default Home;
