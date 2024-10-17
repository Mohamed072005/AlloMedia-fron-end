import {Atom} from "react-loading-indicators";
import CoverSection from "../../components/HomaComponents/CoverSection";
import MainRestaurants from "../../components/HomaComponents/MainRestaurants";

export default function HomePage() {
    return (
        <>
            <CoverSection />
            <MainRestaurants />
        </>
    );
}