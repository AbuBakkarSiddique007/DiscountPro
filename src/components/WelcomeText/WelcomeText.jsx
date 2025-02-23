const WelcomeText = ({ user }) => {
    if (!user?.email) return null;

    return (
        <div className="bg-gray-100 text-center py-3 shadow-md h-20">
            <h2 className="text-xl pt-3 font-semibold text-gray-700">
                Welcome, {user.displayName || "User"}! 🎉
            </h2>
        </div>
    );
};

export default WelcomeText;
