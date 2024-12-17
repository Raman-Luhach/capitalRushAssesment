import {Link} from "react-router-dom";

function Home({ user }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">
                {user ? `Welcome, ${user.email}!` : 'Welcome to the Home Page'}
            </h1>
            <p className="mb-4">This is the default landing page of application.</p>
            <h1 className="text-3xl  my-4">You can visit following links</h1>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                About
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                Contact
            </Link>
        </div>
    );
}

export default Home;

