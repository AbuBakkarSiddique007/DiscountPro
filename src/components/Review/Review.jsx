const reviews = [
    {
        id: 1,
        name: "Imran Khan",
        feedback: "I saved so much using these coupons! The process was smooth and easy.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Sadia Afrin",
        feedback: "Best website for shopping discounts in Bangladesh! Highly recommend.",
        rating: 4.5,
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: " rahul",
        feedback: "Great deals and easy-to-use platform. Love it!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: " anjali",
        feedback: "I found amazing discounts on my favorite brands. Highly recommended!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    }
];

const Review = () => {
    return (
        <section className="py-20 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800"> What Our Users Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {reviews.map((user) => (
                    <div key={user.id} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-gray-300"
                        />
                        <h3 className="text-lg font-semibold mt-4 text-gray-800">{user.name}</h3>
                        <p className="text-gray-600 mt-2">{user.feedback}</p>
                        <div className="flex mt-3 text-yellow-500">
                            {Array.from({ length: Math.floor(user.rating) }).map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            {user.rating % 1 !== 0 && <span>⭐</span>}
                            <span className="ml-1 text-gray-500">{user.rating} / 5</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Review;
