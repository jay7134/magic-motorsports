import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <footer className="bg-[#0C111D] py-8">
            <div className="container mx-auto flex items-center justify-between py-6 px-6">
                <div className="bg-white bg-opacity-10 rounded-xl px-[15px] md:px-[48px] py-[48px] items-center flex flex-col md:flex-row md:w-full gap-8">
                    <div className="w-full md:w-9/12">
                        <img src="../images/logo.svg" alt="Magic Motorsports" className="m-w-[147]"/>
                        <h4 className="text-white text-mormal font-[600] pt-4 pb-2">Subscribe</h4>
                        <p className="text-white text-sm pb-3 text-[#A0A3A8] font-[400] w-full md:max-w-[600px]">Sign up with your email address to receive alerts on new and incoming inventory.</p>
                        <form className="flex gap-4 flex-col md:flex-row">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full md:max-w-[400px] text-white border-2 border-white border-opacity-30 focus:outline-none focus:ring-0 p-3 rounded-md bg-white bg-opacity-30"    
                            />
                            <button className="text-white text-sm font-[400] border-2 rounded-lg px-4 py-3">Subscribe</button>
                        </form>
                        <p className="text-white text-[12px] pt-4 font-[400]">By subscribing you agree to with our  
                            <Link to="/" className="underline pl-1">Privacy Policy</Link>
                        </p>
                    </div>
                    <div className="w-full md:flex-1">
                        <h4 className="text-white text-normal font-[600]">Location</h4>
                        <p className="text-[#A0A3A8] text-sm pt-2 pb-3">501 Church Street NE Vienna, Virginia 22180</p>
                        <h4 className="text-white text-normal font-[600]">Phone</h4>
                        <p className="text-[#A0A3A8] text-sm pt-2 pb-3">703-249-9922</p>
                        <h4 className="text-white text-normal font-[600]">Email</h4>
                        <p className="text-[#A0A3A8] text-sm pt-2 pb-3">sales@magicmotorsports.xyz</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 py-2 px-6">
                <p className="text-white text-[14px] font-[400]">&copy; Copyright 2024 All Rights Reserved Magic Motorsports</p>

                <nav className="text-white text-sm">
                    <ul className="flex flex-col md:flex-row gap-[18px] md:gap-[12px]">
                        <li className="text-[14px] font-[400] underline">
                            <Link>Privacy Policy</Link>
                        </li>
                        <li className="text-[14px] font-[400] underline">
                            <Link>Terms & Conditions</Link>
                        </li>
                        <li className="text-[14px] font-[400] underline">
                            <Link>Shipping & Returns</Link>
                        </li>
                    </ul>
                </nav>

                <nav className="text-white text-sm inline">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="https://facebook.com" target="_blank">
                                <img src="../images/facebook.svg" className="w-6 h-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://instagram.com" target="_blank">
                                <img src="../images/Instagram.svg" className="w-6 h-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://linkedin.com" target="_blank">
                                <img src="../images/LinkedIn.svg" className="w-6 h-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://x.com" target="_blank">
                                <img src="../images/X.svg" className="w-6 h-6"/>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://youtube.com" target="_blank">
                                <img src="../images/Youtube.svg" className="w-6 h-6"/>
                            </Link>
                        </li>
                    </ul>
                </nav>


            </div>
        </footer>
    )
}

export default Footer;