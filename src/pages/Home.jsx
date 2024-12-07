import { Link } from "react-router-dom";
import Faqs from "../components/Faqs";
import FeaturedInventory from "../components/FeaturedInventory";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Video from "../components/Video";

const Home = ()=>{
    return(

        <Layout>
            <section id="hero" className="relative flex items-center justify-center overflow-hidden">
                
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-between py-[120px] px-6 relative z-10 my-10">
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
                    <div className="relative bg-white bg-opacity-20 rounded-[20px] border-2 p-8 max-w-[522px] backdrop-sepia-0">
                        <div className="absolute w-full h-full top-0 blur-xl"></div>
                        <h2 className="text-white text-[32px] leading-[37px] font-[600]">What car are you looking for?</h2>
                        <form>
                            <div className="flex">
                                <label>Make</label>
                                <select>
                                    <option>Toyota</option>
                                    <option>Suzuki</option>
                                    <option>Honda</option>
                                </select>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div>
                                    <label>Model</label>
                                    <select>
                                        <option>2024</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Grade</label>
                                    <select>
                                        <option>5</option>
                                        <option>4</option>
                                        <option>3</option>
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

            <section className="bg-[#EFF1F8] pt-[24px] py-[100px]">
                <div className="container rounded-t-[24px] grid grid-cols md:grid-cols-2 justify-between gap-10 pt-[60px] px-[56px]"
                    style={
                        {
                            background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
                        }
                    }
                >
                    <div className="max-w[580px]">
                        <span className="bg-[#D583E9] bg-opacity-20 text-[#D583E9] px-3 py-2 rounded-md ">auction</span>
                        <h2 className="text-h2 text-[#101828] leading-[62px] font-[600] max-w-[550px] pt-[20px]">Bid on Your Dream JDM Vehicle</h2>
                        <p className="text-normal text-[#475467] font-[400] py-[24px]">Discover a wide selection of authentic JDM cars directly from Japanese auctions. Enjoy transparent bidding with detailed reports, competitive prices, and expert support. Let us handle the logistics while you focus on choosing your perfect ride.</p>
                        <div className="grid grid-cols sm:grid-cols-2 gap-[24px] pt-[16px] pb-[32px]">
                            <div className="flex flex-row items-center gap-[16px]">
                                <img 
                                    src="../images/f1.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4 className="text-[14px] text-[#475467] font-[400]">Wide Selection</h4>
                            </div>
                            <div className="flex flex-row items-center gap-[16px]">
                                <img 
                                    src="../images/f2.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4 className="text-[14px] text-[#475467] font-[400]">Competitive Prices</h4>
                            </div>
                            <div className="flex flex-row items-center gap-[16px]">
                                <img 
                                    src="../images/f3.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4 className="text-[14px] text-[#475467] font-[400]">Transparency</h4>
                            </div>
                            <div className="flex flex-row items-center gap-[16px]">
                                <img 
                                    src="../images/f4.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4 className="text-[14px] text-[#475467] font-[400]">Expert Support</h4>
                            </div>
                            <div className="flex flex-row items-center gap-[16px]">
                                <img 
                                    src="../images/f5.svg" alt="" 
                                    className="w-[48px] h-[48px]"
                                    aria-hidden="true"    
                                />
                                <h4 className="text-[14px] text-[#475467] font-[400]">Easy Process</h4>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img 
                            src="../images/img1211.jpg"
                            alt=""
                            className="absolute w-full h-full object-cover rounded-[12px]"
                        />
                        <div className="bg-white w-[400px]">
                            <div>
                                <img src="" 
                                    className=""
                                />
                                <div>
                                    <span className="">17,000km</span>
                                    <h4 className="">1996 NISSAN SERENA 4D FX</h4>
                                    <div>
                                        <div className="">
                                            <div>
                                                <img src=""/>
                                                <span className="">Bid No: No.60020</span>
                                            </div>
                                            <span>Grade: 4</span>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-blue-200"></div>
                                    <div className="">
                                        <button>View Details</button>
                                        <button>Add favorite</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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