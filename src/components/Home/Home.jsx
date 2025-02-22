import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsOnSell from "../BrandsOnSell/BrandsOnSell";
import TopBrands from "../TopBrands/TopBrands";
import PopularCategories from "../PopularCategories/PopularCategories";
import SaveMoreTips from "../SaveMoreTips/SaveMoreTips";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import AboutDev from "../AboutDev/AboutDev";


const Home = () => {

    const loaderData = useLoaderData();
    console.log(loaderData);


    return (
        <div className="border-2 border-blue-300">
            <div>
                <Banner></Banner>
            </div>

            <div>
                <TopBrands loaderData={loaderData} ></TopBrands>
            </div>

            <div>
                <BrandsOnSell loaderData={loaderData} ></BrandsOnSell>
            </div>

            <div>
                <PopularCategories></PopularCategories>
            </div>

            <div>
                <SaveMoreTips></SaveMoreTips>
            </div>

            <div>
                <Review></Review>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;