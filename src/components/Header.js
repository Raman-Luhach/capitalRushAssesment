import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Header({ user }) {
    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                    <span className="text-xl font-bold">Capital Rush Assesment</span>
                </div>
                <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
                    <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                        Home
                    </Link>
                    <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                        About
                    </Link>
                    <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                        Contact
                    </Link>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="px-3 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/auth"
                            className="px-3 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
                        >
                            Sign In
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;

