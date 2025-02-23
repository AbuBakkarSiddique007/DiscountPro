const WelcomeText = ({ user }) => {
    if (!user?.email) return null;

    return (
        <div className="bg-blue-100 text-center py-3 shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">
                Welcome, {user.displayName || "User"}! 🎉
            </h2>
        </div>
    );
};

export default WelcomeText;
