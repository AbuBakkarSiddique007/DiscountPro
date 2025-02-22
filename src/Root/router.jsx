import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import BrandsPage from "../components/BrandsPage/BrandsPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AboutDev from "../components/AboutDev/AboutDev";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/FakeData.json")

            },
            {
                path: "/brand/:_id",
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => {
                    return fetch(`/FakeData.json`)
                        .then((res) => res.json())
                        .then((data) => {
                            const brand = data.find((brand) => brand._id === params._id);
                            return { brand };
                        });
                }
            },
            {
                path: "/brands",
                element: <BrandsPage></BrandsPage>,
                loader: () => fetch("/FakeData.json")
            },
            {
                path: "/aboutDev",
                element: <AboutDev></AboutDev>

            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
                
            }
        ]

    }
]);

export default router;