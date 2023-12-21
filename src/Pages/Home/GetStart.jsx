import { Link } from "react-router-dom";

const GetStart = () => {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-violet-600 my-8">
            <h2 className="text-center text-4xl font-bold py-12">Get Started with HapiFy today</h2>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">

                <Link to='/signUp'>
                    <button className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                        Sign Up
                    </button>
                </Link>
            </div>

            <p className="text-xl font-bold text-center py-7">Sign Up its free !</p>
        </div>
    );
};

export default GetStart;