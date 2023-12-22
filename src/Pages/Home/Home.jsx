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
         <GetStart></GetStart>
         <Footer></Footer>
        </div>
    );
};

export default Home;