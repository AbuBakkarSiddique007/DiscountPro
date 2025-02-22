const BrandsOnSell = ({ loaderData }) => {
    console.log(loaderData);

    const brandsOnSell = loaderData.filter(brand => brand.isSaleOn);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🔥 Brands on Sale 🔥</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {brandsOnSell.map((brand) => (
                        <div key={brand._id} className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition duration-300">
                            <img src={brand.brand_logo} alt={brand.brand_name} className="w-16 h-16 object-contain mx-auto" />
                            <h2 className="text-lg font-semibold text-center mt-3 text-gray-900">{brand.brand_name}</h2>
                            <p className="text-gray-600 text-sm text-center">{brand.category}</p>
                            <p className="text-gray-800 text-center font-medium">Total Coupons: {brand.coupons.length}</p>
                            <a href={brand.shop_link} target="_blank" className="block mt-4 text-center text-blue-500 hover:underline">
                                Visit Shop
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandsOnSell;
