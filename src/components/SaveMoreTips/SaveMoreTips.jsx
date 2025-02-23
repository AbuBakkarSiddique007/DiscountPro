const SaveMoreTips = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-3xl font-bold text-center text-black mb-6"> How to Save More with Coupons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-black">🛍️ Stack Coupons & Cashback</h3>
                        <p className="text-gray-600 mt-2">
                            Many stores allow you to use multiple coupons together! Combine a discount coupon with
                            cashback rewards for maximum savings.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-black">⏳ Shop During Flash Sales</h3>
                        <p className="text-gray-600 mt-2">
                            Look for seasonal sales like Black Friday, Cyber Monday, or holiday promotions to get
                            even bigger discounts with your coupons.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-black">🎯 Use Coupons with Free Shipping</h3>
                        <p className="text-gray-600 mt-2">
                            If possible, choose coupons that offer free shipping along with discounts to maximize
                            your total savings.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-black">🛒 Subscribe for Exclusive Deals</h3>
                        <p className="text-gray-600 mt-2">
                            Many brands offer special promo codes to their newsletter subscribers. Sign up to receive
                            exclusive discounts in your inbox.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaveMoreTips;
