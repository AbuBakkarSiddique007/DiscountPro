import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandsOnSell from "../BrandsOnSell/BrandsOnSell";
import TopBrands from "../TopBrands/TopBrands";


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
                <BrandsOnSell></BrandsOnSell>
            </div>

            <h1>
                Extra 1 goes here
            </h1>
            <h1>
                Extra 2 goes here
            </h1>

        </div>
    );
};

export default Home;