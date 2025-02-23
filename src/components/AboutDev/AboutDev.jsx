const AboutDev = () => {
    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Me</h1>
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold text-blue-600">Who I Am</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Hello! I'm <span className="font-bold">Abu Bakkar Siddique</span>, a passionate developer with a strong interest in building impactful web applications and learning new technologies. I specialize in various programming languages and frameworks, allowing me to create dynamic and user-friendly websites.
                    </p>
                </section>

                <section className="space-y-6 mt-8">
                    <h2 className="text-3xl font-semibold text-blue-600">My Projects</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
                        <li>
                            <strong>Pet Adoption Project:</strong> A responsive web application featuring a navbar, pet categories, sorting, and API integration.
                        </li>
                        <li>
                            <strong>Discount PRO:</strong> A React project featuring product categories, a cart, and wishlist functionality, utilizing Firebase Authentication and Tailwind CSS.
                        </li>
                        <li>
                            <strong>Weather App:</strong> A simple React-based app fetching real-time weather data via an API.
                        </li>
                    </ul>
                </section>

                <section className="space-y-6 mt-8">
                    <h2 className="text-3xl font-semibold text-blue-600">My Skills</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
                        <li className="hover:text-blue-700 transition">
                            <strong>Programming Languages:</strong> JavaScript, Python, Java & C++
                        </li>
                        <li className="hover:text-blue-700 transition">
                            <strong>Frontend:</strong> HTML, CSS, React, Tailwind CSS & Bootstrap
                        </li>
                        <li className="hover:text-blue-700 transition">
                            <strong>Backend:</strong> Node.js, Express
                        </li>
                        <li className="hover:text-blue-700 transition">
                            <strong>Databases:</strong> MongoDB, MySQL
                        </li>
                        <li className="hover:text-blue-700 transition">
                            <strong>Others:</strong> Firebase, Netlify, Vercel
                        </li>
                        <li className="hover:text-blue-700 transition">Machine Learning & AI</li>
                        <li className="hover:text-blue-700 transition">Git & GitHub</li>
                        <li className="hover:text-blue-700 transition">Responsive Web Design</li>
                        <li className="hover:text-blue-700 transition">IoT</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutDev;
