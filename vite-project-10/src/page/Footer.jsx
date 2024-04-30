//footer by chat 
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm">© 2024 Your Website. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li><Link to="/home" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/About" className="hover:text-gray-300">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>

                    </ul>
                </div>
            </div>
        </footer>
    );
}
