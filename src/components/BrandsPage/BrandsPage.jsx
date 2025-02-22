import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BrandsPage = () => {
    const brands = useLoaderData();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">

            <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">🌟 Featured Brands</h1>

            <div className="mb-6">
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
                        <div key={brand._id} className="bg-white shadow-md rounded-lg p-5 flex items-center border border-gray-200 relative">
                            
                            <img
                                src={brand.brand_logo}
                                alt={brand.brand_name}
                                className="w-16 h-16 object-contain"
                            />

                            <div className="flex-grow ml-4">
                                <div className="flex items-center text-yellow-500">
                                    <FaStar className="mr-1" />
                                    <span className="text-gray-700 font-bold">{brand.rating}</span>
                                </div>
                                <h2 className="text-lg font-semibold">{brand.brand_name}</h2>
                                <p className="text-sm text-gray-600">{brand.description}</p>
                            </div>

                            <NavLink to={`/brand/${brand._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                View Coupons
                            </NavLink>

                            {brand.isSaleOn && (
                                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md animate-bounce">
                                    🔥 Sale is On!
                                </span>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default BrandsPage;
