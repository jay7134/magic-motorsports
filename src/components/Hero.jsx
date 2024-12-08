import { Link } from "react-router-dom";
const Hero = ()=>{
    return(
        <section id="hero" className="relative flex items-center justify-center overflow-hidden">
                
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-18 items-center justify-between pt-[110px] pb-[80px] px-6 relative z-10 my-10 animate__animated animate__fadeIn">
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
                <div className="text-left md:pl-[20px]">
                    <h1 className="text-[40px] leading-[48px] md:text-h1 md:text-h1 font-bold text-white animate__animated animate__fadeInUp">Discover a New Level of Comfort</h1>
                    <p className="text-[13px] md:text-normal text-white font-[400] py-4 m-w-[610] animate__animated animate__fadeInUp">Magic Motorsports imports authentic Japanese Domestic Market (JDM) vehicles. We handle everything from inspections to paperwork, ensuring compliance with U.S. regulations. Explore our inventory and Japanese auctions to find your perfect car</p>
                    <div className="flex flex-col md:flex-row gap-4 pt-6 animate__animated animate__fadeInUp">
                        <button className="text-white text-sm font-[400] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-lg px-5 h-[48px]">Discover More</button>
                        <Link to="/contact-us">
                            <button className="w-full md:w-auto text-[#D6BBFB] hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-[#D6BBFB] hover:bg-[#D6BBFB] rounded-lg  px-5 h-[48px]">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:flex relative rounded-[20px] border-2 p-8 max-w-[522px] mx-auto overflow-hidden">
                    <div className="absolute bg-white bg-opacity-20 [backdrop-filter:blur(3.98px)] w-full h-full top-0 left-0 z-[-1]"></div>
                    <div className="animate__animated animate__fadeInUp">
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
                        <div className="grid grid-cols ">
                            <button className="text-sm font-[600] block bg-transparent hover:bg-white border boreder-[1px] border-white w-full outline-none text-white hover:text-black py-2 px-2 rounded-[8px] mt-[10px] transition duration-300">SUBMIT</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>

        </section>
    )
}
export default Hero;