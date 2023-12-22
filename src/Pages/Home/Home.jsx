import FeaturesSection from "../About/FeaturesSection";
import Banner from "./Banner";
import Beneficiary from "./Beneficiary";
import Footer from "./Footer";
import GetStart from "./GetStart";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Beneficiary></Beneficiary>
            <FeaturesSection />
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <GetStart></GetStart>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;