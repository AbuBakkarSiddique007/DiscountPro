const AboutDev = () => {
    return (
        <div className="mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Me</h1>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Who I Am</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Hello! I'm <span className="font-bold">Abu Bakkar Siddique</span>, a passionate developer with a keen interest in building impactful web applications and learning new technologies. I have experience in various programming languages and frameworks, enabling me to create dynamic and user-friendly websites.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">My Projects</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                    <li>
                        <strong>Pet Adoption Project:</strong> A responsive web application for pet adoption that includes features like a navbar, pet categories, sorting, and API integration.
                    </li>
                    <li>
                        <strong>Discount PRO:</strong> A React project featuring product categories, a cart, and a wishlist functionality, utilizing Firebase Authentication and Tailwind CSS for styling.
                    </li>
                    <li>
                        <strong>Weather App:</strong> A simple weather app built with React that fetches weather data from an API and displays it on the screen.
                    </li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">My Skills</h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                    <li>
                        <strong>Programming Languages:</strong> JavaScript, Python, Java & C++
                    </li>
                    <li>
                        <strong>Frontend:</strong> HTML, CSS, React, Tailwind CSS & Bootstrap
                    </li>
                    <li>
                        <strong>Backend:</strong> Node.js, Express
                    </li>
                    <li>
                        <strong>Databases:</strong> MongoDB, MySQL
                    </li>
                    <li>
                        <strong>Others:</strong> Firebase, Netlify, Github , Vercel
                    </li>

                    <li>Machine Learning & AI</li>
                    <li>Git & GitHub</li>
                    <li>Responsive Web Design</li>
                    <li>IoT</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutDev;
