import { useState } from 'react';
import ProfileCover from '../../assets/img/bg.png';
import LogoutButton from './LogoutButton';
// import './NavBarStyle.css';
import './NavBarStyle.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className='relative'>
                <nav className="navbar flex justify-between px-3 py-5 rounded-lg">
                    <div className="px-8 pt-2">
                        <h1 className="text-[#f1d500] font-bold text-4xl font-mono">
                            AlloMedia
                        </h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 text-sm font-medium text-[#f1d500] bg-transparent border-2 border-[#f1d500] rounded-md hover:bg-[#f1d500] hover:text-[#1a202c] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#f1d500] focus:ring-opacity-50">
                            Login
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-[#1a202c] bg-[#f1d500] rounded-md hover:bg-[#e2c500] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#f1d500] focus:ring-opacity-50">
                            Register
                        </button>
                        <div className="relative px-8">
                            <button
                                className="bg-yellow-300 rounded-full hover:shadow-2xl hover:shadow-[#4c5065] transition duration-300 ease-in-out"
                                onClick={toggleDropdown}
                            >
                                <img
                                    className="rounded-full"
                                    height="60"
                                    width="60"
                                    src={ProfileCover}
                                    alt="Profile"
                                />
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[#2d3748] rounded-lg shadow-lg z-50 transition duration-300 ease-in-out transform origin-top">
                                    <ul className="py-2 text-gray-300">
                                        <li className="px-4 py-3 hover:bg-[#4a5568] cursor-pointer rounded-t-lg transition duration-200 ease-in-out">
                                            <Link to={'/'}>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="px-4 py-3 hover:bg-[#4a5568] cursor-pointer transition duration-200 ease-in-out">
                                            <Link to={'/my/chats'}>
                                                My Chats
                                            </Link>
                                        </li>
                                        <li className="flex items-center px-4 py-3 hover:bg-[#4a5568] cursor-pointer rounded-b-lg transition duration-200 ease-in-out">
                                            <LogoutButton />
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
