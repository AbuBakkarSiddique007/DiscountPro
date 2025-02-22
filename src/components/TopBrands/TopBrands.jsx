import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const TopBrands = ({ loaderData }) => {
    console.log(loaderData);

    const brands = loaderData




    return (
        <div>
            <section className="my-10 text-center">

                <h2 className="text-3xl font-bold mb-5">Get the Best Shopping Coupons in Bangladesh!</h2>

                <div className="overflow-hidden">
                    <Marquee pauseOnHover speed={50}>
                        {brands.map((brand) => (
                            <NavLink
                                key={brand._id}
                                to={`/brand/${brand._id}`}
                                className="mx-6 flex flex-col items-center"
                            >
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="h-16 w-32 object-contain transition-transform hover:scale-110"
                                />

                                <span className="text-sm font-bold">{brand.brand_name}</span>
                            </NavLink>
                        ))}
                    </Marquee>
                </div>
            </section>
        </div>
    );
};

export default TopBrands;