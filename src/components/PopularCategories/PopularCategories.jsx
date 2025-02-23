const PopularCategories = () => {
    const categories = [
        { name: "Electronics", icon: "💻" },
        { name: "Fashion", icon: "👗" },
        { name: "Home & Kitchen", icon: "🏠" },
        { name: "Health & Beauty", icon: "💄" },
        { name: "Travel & Hotels", icon: "✈️" },
        { name: "Food & Dining", icon: "🍕" }
    ];

    return (
        <div className="bg-gray-100 text-white py-10">
            <div className="max-w-6xl mx-auto p-4">
                <h2 className="text-3xl text-black font-bold text-center mb-6"> Popular Coupon Categories</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
                    {categories.map((category, index) => (
                        <div key={index} className="p-4 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 transition">
                            <span className="text-3xl">{category.icon}</span>
                            <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularCategories;
