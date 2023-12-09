import NavBar from "src/components/basic/NavBar";
import Categories from "src/components/home/Categories";
import Companies from "src/components/home/Companies";
import Presentation from "src/components/home/Presentation";

function Home() {
    return (
        <div>
            <NavBar />
            <Presentation />
            <Categories />
            <Companies />
        </div>
    );
}

export default Home;
