import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menu = [
        {
            title:"Home",
            to:'/',
        },
        {
            title:"Find a vehicle",
            to:'/find-a-vehicle',
        },
        {
            title:"Japanese Auctions",
            to:'/japanese-auctions',
        },
        {
            title:"Inventory",
            to:'/inventory',
        },
        {
            title:"Deposit",
            to:'/deposit',
        },
        {
            title:"Shop",
            to:'/shop',
        }
    ];
    return(
        <>
        <header className="header">
        <div className="container mx-auto flex items-center justify-between py-6 px-6">
            <div className="flex-shrink-0">
                <Link to="/">
                    <img
                        src="../images/logo.svg"
                        alt="Logo"
                        className="h-15 w-[147]"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4">
            {
                menu.map((item,index)=>(
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>`text-sm capitalize px-2 pb-2 text-black hover:text-gray-900 ${isActive ? "border-b-2 border-black" : "" }`}
                    >
                        {item.title}    
                    </NavLink>
                ))
            }
            
            </nav>

            {/* Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact-us">    
                <button className="text-purple font-[600] px-6 py-3 rounded-lg shadow-2sm transition duration-300 hover:bg-purple hover:text-white border-2 border-purple">
                    Contact us
                </button>
            </Link>
            <button className="bg-purple text-white font-[600] px-6 py-3 rounded-lg shadow-2sm border-2 border-purple transition duration-300 hover:bg-purple-light">
                Log in/Sign Up
            </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            </button>
        </div>
        {/* Mobile Navigation */}
        { /*className="lg:hidden bg-[#EFF1F8] px-6 pb-4 overflow-hidden transition-all duration-500" */}
        {isMenuOpen && (
            <div 
                className={`absolute top-[94px] left-0 z-[90] px-6 w-full bg-gray-100 shadow-md overflow-hidden transition-all duration-500 ${
                    isMenuOpen ? "max-h-screen" : "max-h-0"
                }`}    
            >
                <div className="text-right py-[20px]">
                <nav className="space-y-4">
                    {
                        menu.map((item,index)=>(
                            <NavLink
                                key={index}
                                to={item.to}
                                className="block text-black hover:text-gray-900"
                            >
                                {item.title}    
                            </NavLink>
                        ))
                    }
                    <Link to="/contact-us">
                        <button className="max-w-[340px] mr-[15px] text-purple font-[600] px-6 py-3 rounded-lg shadow-2sm transition duration-300 hover:bg-purple hover:text-white border-2 border-purple">
                            Contact Us
                        </button>
                    </Link>

                    <button className="max-w-[340px] bg-purple text-white font-[600] px-6 py-3 rounded-lg shadow-2sm border-2 border-purple transition duration-300 hover:bg-purple-light">
                        Log in/Sign Up
                    </button>
                </nav>
                </div>
            </div>
        )}
        </header>
        </>
    )
}

export default Header;