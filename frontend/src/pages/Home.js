import NavBar from "src/components/basic/NavBar";
import Presentation from "src/components/home/Presentation";
import Categories from "src/components/home/Categories";
import Companies from "src/components/home/Companies";
import Reviews from "src/components/home/Reviews";
import Delivery from "src/components/home/Delivery";

function Home() {
    return (
        <div>
            <NavBar />
            <Presentation />
            <Categories />
            <Companies />
            <Reviews />
            <Delivery />
        </div>
    );
}

export default Home;
