import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../Banner/Banner";
import BrandsOnSell from "../BrandsOnSell/BrandsOnSell";
import TopBrands from "../TopBrands/TopBrands";
import PopularCategories from "../PopularCategories/PopularCategories";
import SaveMoreTips from "../SaveMoreTips/SaveMoreTips";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import WelcomeText from "../WelcomeText/WelcomeText";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
    const { user } = useContext(AuthContext);
    const loaderData = useLoaderData();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        AOS.refresh();
    }, []);

    return (
        <div className="">
            <div data-aos="fade-down">
                <WelcomeText user={user} />
            </div>

            <div data-aos="zoom-in">
                <Banner />
            </div>

            <div data-aos="fade-right">
                <TopBrands loaderData={loaderData} />
            </div>

            <div data-aos="fade-left">
                <BrandsOnSell loaderData={loaderData} />
            </div>

            <div data-aos="zoom-in">
                <PopularCategories />
            </div>

            <div data-aos="fade-up">
                <SaveMoreTips />
            </div>

            <div data-aos="flip-left">
                <Review />
            </div>

            <div>
                <Footer />

            </div>
            
            <div>
            <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </div>
    );
};

export default Home;
