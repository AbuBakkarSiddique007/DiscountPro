import { useEffect } from "react";
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

const Home = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });
    }, []);

    return (
        <div className="border-2 border-blue-300">
            <div data-aos="fade-up">
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

            <div data-aos="flip-up">
                <SaveMoreTips />
            </div>

            <div data-aos="fade-up">
                <Review />
            </div>

            <div data-aos="fade-in">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
