import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BrandsPage = () => {
    const brands = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100 min-h-screen">

            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6"> Featured Brands</h1>

            <div className="mb-6 text-xl pb-4 max-w-lg text-center mx-auto">
                <p className="text-black text-lg">
                    Find the best shopping coupons from your favorite brands in Bangladesh.
                </p>
                <input
                    type="text"
                    placeholder="Search brands..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                {brands
                    .filter((brand) =>
                        brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((brand) => (
                        <div
                            key={brand._id}
                            className="bg-white shadow-md rounded-lg p-5 flex flex-col sm:flex-row items-center sm:items-start border border-gray-200 relative"
                        >
                            {/* Logo at the top on small screens */}
                            <img
                                src={brand.brand_logo}
                                alt={brand.brand_name}
                                className="w-16 h-16 object-contain mb-3 sm:mb-0 sm:mr-4"
                            />

                            {/* Brand Info */}
                            <div className="flex-grow text-center sm:text-left">
                                <div className="flex justify-center sm:justify-start items-center text-yellow-500">
                                    <FaStar className="mr-1" />
                                    <span className="text-gray-700 font-bold">{brand.rating}</span>
                                </div>
                                <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
                                <p className="text-sm text-gray-600">{brand.description}</p>
                            </div>

                            {/* Sale Badge & Button (move to bottom on small screens) */}
                            <div className="mt-4 sm:mt-0 flex flex-col w-full sm:w-auto items-center sm:items-end">
                                {brand.isSaleOn && (
                                    <span className="bg-red-500 text-white px-3 py-1 rounded-md animate-bounce text-sm mb-2">
                                        🔥 Sale is On!
                                    </span>
                                )}
                                <NavLink
                                    to={`/brand/${brand._id}`}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto text-center"
                                >
                                    View Coupons
                                </NavLink>
                            </div>
                        </div>
                    ))}
            </div>


        </div>
    );
};

export default BrandsPage;
