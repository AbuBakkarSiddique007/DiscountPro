import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import BrandDetails from "../components/BrandDetails/BrandDetails";

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
            }
        ]

    }
]);

export default router;