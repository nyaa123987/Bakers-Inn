import KidsHero from "./components/KidsHero";
import SpaceshipMaze from "./components/SpaceshipMaze";
import RiskyWay from "./components/RiskyWay";
import Pacman from "./components/Pacman";

export default function Kids() {
    return(
        <main>
            <KidsHero />
            <SpaceshipMaze />
            <RiskyWay />
            <Pacman />
        </main>
    )
}