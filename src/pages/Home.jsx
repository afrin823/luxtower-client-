import { Helmet } from "react-helmet-async";
import AboutBuliding from "./AboutBuliding";
import Banner from "./Banner";
import Cupon from "./Cupon/Cupon";
import Features from "./Features";
import Location from "./Location";



const Home = () => {
 
    return (
        <div>
              <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <AboutBuliding></AboutBuliding>   
            <Cupon></Cupon>        
            <Location></Location>

        </div>
    );
};

export default Home;