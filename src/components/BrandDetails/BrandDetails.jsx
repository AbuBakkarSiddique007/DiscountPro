import { useLoaderData } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BrandDetails = () => {
    const brand = useLoaderData();
    const { brand: { brand_name, rating, description, brand_logo, coupons, shop_link, category, isSaleOn } } = brand;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <div className="flex items-center space-x-4">
                <img src={brand_logo} alt={brand_name} className="w-16 h-16 object-contain" />
                <div>
                    <h2 className="text-2xl font-bold">{brand_name}</h2>
                    <p className="text-gray-600">Category: {category}</p>
                    <p className="text-yellow-500 font-semibold">Rating: {rating} ⭐</p>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold">Coupons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    {coupons.map((coupon, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-md">
                            <p className="text-lg font-medium">{coupon.description}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-gray-600">
                                    Code: <span className="font-bold">{coupon.coupon_code}</span>
                                </p>
                                <CopyToClipboard text={coupon.coupon_code} onCopy={() => toast.success("Coupon code copied!")}>
                                    <button className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                                        Copy Code
                                    </button>
                                </CopyToClipboard>
                            </div>
                            <p className="text-gray-500">Expiry: {coupon.expiry_date}</p>
                            <p className="text-gray-500">Condition: {coupon.condition}</p>
                            <a
                                href={shop_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 block bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 text-center"
                            >
                                Use Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 text-center">
                {isSaleOn && <p className="text-red-500 font-bold text-lg">🔥 Sale is On! Grab your deals now!</p>}
                <a
                    href={shop_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Visit Store
                </a>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default BrandDetails;
