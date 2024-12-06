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
                        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                        
                    </div>
                    <div className="text-left">
                        <h1 className="text-h1 md:text-h1 font-bold text-white">Discover a New Level of Comfort</h1>
                        <p className="text-normal text-white font-[400] py-4 m-w-[610]">Magic Motorsports imports authentic Japanese Domestic Market (JDM) vehicles. We handle everything from inspections to paperwork, ensuring compliance with U.S. regulations. Explore our inventory and Japanese auctions to find your perfect car</p>
                        <div className="flex flex-row gap-4">
                            <button className="text-white bg-purple rounded-lg py-4 px-6">Discover More</button>
                            <button className="text-white py-4 px-6 border-2 bg-border-white rounded-lg">Contact Us</button>
                        </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-[20px] border-2 p-8">
                        <h2 className="text-white font-[600]">What car are you looking for?</h2>
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

                <div className="container">
                    <h2 className="text-2xl font-[600]">Your Journey to Owning a JDM Vehicle</h2>
                    <div className="flex flex-col md:flex-row gap-[24px] py-8">
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                            <img 
                                src="../images/icon-globe.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] py-3">Browse Inventory</h4>
                            <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                        </div>
                        <div className="bg-white p-[24px] gap-8">
                            <img 
                                src="../images/icon-vehicle.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4>Browse Inventory</h4>
                            <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                        </div>
                        <div>
                            <img 
                                src="../images/icon-ship.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4>Browse Inventory</h4>
                            <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                        </div>
                        <div>
                            <img 
                                src="../images/icon-received.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4>Browse Inventory</h4>
                            <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
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