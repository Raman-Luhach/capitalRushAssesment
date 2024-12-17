import {Link} from "react-router-dom";

function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className='mb-4'>This is the Contact page of application.</p>

            <h1 className="text-3xl  my-4">You can visit following links</h1>
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                About
            </Link>
        </div>
    );
}

export default Contact;

