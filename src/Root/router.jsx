import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../components/Home/Home";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import BrandsPage from "../components/BrandsPage/BrandsPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AboutDev from "../components/AboutDev/AboutDev";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyProfile from "../components/MyProfile/MyProfile";

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
                element: <PrivateRoute>
                    <BrandDetails></BrandDetails>
                </PrivateRoute>,
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
                path: "/myProfile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: "/aboutDev",
                element: <AboutDev></AboutDev>

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>

            }
        ]

    }
]);

export default router;