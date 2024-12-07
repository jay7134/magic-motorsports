import { Link } from "react-router-dom";
import Faqs from "../components/Faqs";
import FeaturedInventory from "../components/FeaturedInventory";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Video from "../components/Video";
import Auction from "../components/Auction";

const Home = ()=>{
    return(

        <Layout>
            <section id="hero" className="relative flex items-center justify-center overflow-hidden">
                
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between pt-[110px] pb-[80px] px-6 relative z-10 my-10">
                    <div className="absolute inset-0 w-full h-full rounded-[30px] overflow-hidden z-[-1]">
                        <img
                            decoding="async"
                            src="../images/bg-home-hero.jpg"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" style={{
                        background: 'background: rgb(0,0,0)',
                        background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                    }}></div>
                        
                    </div>
                    <div className="text-left">
                        <h1 className="text-h1 md:text-h1 font-bold text-white">Discover a New Level of Comfort</h1>
                        <p className="text-normal text-white font-[400] py-4 m-w-[610]">Magic Motorsports imports authentic Japanese Domestic Market (JDM) vehicles. We handle everything from inspections to paperwork, ensuring compliance with U.S. regulations. Explore our inventory and Japanese auctions to find your perfect car</p>
                        <div className="flex flex-row gap-4 pt-6">
                            <button className="text-white text-sm font-[400] leading-[21px] bg-[#4A0CB6] rounded-lg px-5 h-[48px]">Discover More</button>
                            <Link to="/contact-us">
                                <button className="text-[#D6BBFB] hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-[#D6BBFB] hover:bg-[#D6BBFB] rounded-lg  px-5 h-[48px]">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative rounded-[20px] border-2 p-8 max-w-[522px] overflow-hidden">
                        <div className="absolute bg-white bg-opacity-20 [backdrop-filter:blur(3.98px)] w-full h-full top-0 left-0 z-[-1]"></div>
                        <h2 className="text-white text-[32px] leading-[37px] font-[600] max-w-[360px]">What car are you looking for?</h2>
                        <form className="pt-4">
                            <div className="mb-[10px]">
                                <label className="text-white font-sm font-[500] leading-[24px]">Make</label>
                                <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                    <option className="text-sm font-[400] text-black">Select cars</option>
                                    <option className="text-sm font-[400] text-black">Toyota</option>
                                    <option className="text-sm font-[400] text-black">Suzuki</option>
                                    <option className="text-sm font-[400] text-black">Honda</option>
                                </select>
                            </div>
                            <div className="grid grid-cols sm:grid-cols-2 gap-4">
                                <div className="mb-[10px]">
                                    <label className="text-white font-sm font-[500] leading-[24px]">Model</label>
                                    <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                    <option className="text-sm font-[400] text-black">Select model</option>
                                        <option className="text-sm font-[400] text-black">2024</option>
                                        <option className="text-sm font-[400] text-black">2023</option>
                                        <option className="text-sm font-[400] text-black">2022</option>
                                    </select>
                                </div>
                                <div className="mb-[10px]">
                                    <label className="text-white font-sm font-[500] leading-[24px]">Grade</label>
                                    <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                    <option className="text-sm font-[400] text-black">Select grade</option>
                                        <option className="text-sm font-[400] text-black">5</option>
                                        <option className="text-sm font-[400] text-black">4</option>
                                        <option className="text-sm font-[400] text-black">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols">
                                <label className="text-white font-sm font-[500] leading-[24px]">Year</label>
                                <div className="grid grid-cols sm:grid-cols-2 gap-4">
                                    <div className="mb-[10px] relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="ri-calendar-line text-white"></i>
                                        </span>
                                        <input 
                                            type="number"
                                            
                                            placeholder="2020"
                                            min="2000"
                                            max="2025"
                                            className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px] pl-10"
                                        />
                                        
                                    </div>
                                    <div className="mb-[10px] relative">
                                        
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <i className="ri-calendar-line text-white"></i>
                                        </span>
                                        <input 
                                            type="number"
                                            
                                            placeholder="2024"
                                            min="2000"
                                            max="2025"
                                            className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px] pl-10"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols sm:grid-cols-2 gap-4">
                                <div className="mb-[10px]">
                                    <label className="text-white font-sm font-[500] leading-[24px]">Color</label>
                                    <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                    <option className="text-sm font-[400] text-black">Select color</option>
                                        <option className="text-sm font-[400] text-black">White</option>
                                        <option className="text-sm font-[400] text-black">Black</option>
                                        <option className="text-sm font-[400] text-black">Grey</option>
                                    </select>
                                </div>
                                <div className="mb-[10px]">
                                    <label className="text-white font-sm font-[500] leading-[24px]">Transmission</label>
                                    <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                    <option className="text-sm font-[400] text-black">Select transmission</option>
                                        <option className="text-sm font-[400] text-black">Automatic</option>
                                        <option className="text-sm font-[400] text-black">Manual</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
            <section id="journey">

                <div className="container pt-[80px] pb-[50px]">
                    <h2 className="text-h2 text-[#101828] font-[600] leading-[67px] max-w-[590px]">Your Journey to Owning a JDM Vehicle</h2>
                    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-[24px] py-10">
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                            <img 
                                src="../images/icon-globe.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Browse Inventory</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                            <img 
                                src="../images/icon-vehicle.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Vehicle Selection</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Choose your desired vehicle and request a detailed pre-purchase inspection.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                            <img 
                                src="../images/icon-ship.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Purchase and Import</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">We handle all import paperwork and ensure your vehicle meets U.S. regulations.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                            <img 
                                src="../images/icon-received.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Receive Your Car</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Once all procedures are complete, your JDM vehicle is delivered to your specified location.</p>
                        </div>
                    </div>
                </div>

            </section>

            <Auction/>

            <section>
                <div className="container flex flex-col md:flex-row justify-between gap-20 py-[100px]">
                    <div className="w-1/2 relative">
                        <img 
                            src="../images/img1211.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="bg-white w-[400px] m-8">

                        </div>
                    </div>
                    <div className="w-1/2">
                        <span className="bg-[#D583E9] px-3 py-2 rounded-md ">auction</span>
                        <h2>Bid on Your Dream JDM Vehicle</h2>
                        <p>Discover a wide selection of authentic JDM cars directly from Japanese auctions. Enjoy transparent bidding with detailed reports, competitive prices, and expert support. Let us handle the logistics while you focus on choosing your perfect ride.</p>
                        <div className="flex">
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section>
                <div className="container flex flex-col md:flex-row justify-between gap-20 py-[100px]">
                    <div className="w-1/2">
                        <span className="bg-[#D583E9] px-3 py-2 rounded-md ">auction</span>
                        <h2>Bid on Your Dream JDM Vehicle</h2>
                        <p>Discover a wide selection of authentic JDM cars directly from Japanese auctions. Enjoy transparent bidding with detailed reports, competitive prices, and expert support. Let us handle the logistics while you focus on choosing your perfect ride.</p>
                        <div className="flex">
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                            <div className="flex flex-row gap-4">
                                <img 
                                    src="../images/icon-received.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4>Wide Selection</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 relative">
                        <img 
                            src="../images/img1211.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover"
                        />
                        <div className="bg-white w-[400px] m-8">

                        </div>
                    </div>
                </div>
            </section>

            <Video/>
            <Services/>
            <FeaturedInventory/>
            <Faqs/>
        </Layout>

    )
}

export default Home;