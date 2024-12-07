const FeaturedInventory = ()=>{
    return(
        <section id="featured-inventory" className="relative bg-white py-[100px] overflow-hidden">
            <div className="container">
                <h2 className="text-h2 text-black leading-[62px] font-[600] text-center pb-[56px]">Featured inventory</h2>
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-between space-around gap-[32px] overflow-hidden">
                    <div className="relative flex overflow-hidden items-end">
                        <img 
                            src="../images/featured-1.jpg"
                            alt="Featured Inventory"
                            className="absolute w-full h-full object-cover z-1 rounded-[12px]"    
                        />
                        <div className="flex flex-col z-20 p-[20px] w-full pt-[260px] pb-[24px]">
                            <div className="relative py-[24px] px-[20px] items-end">
                            <div className="absolute bg-white bg-opacity-20 [backdrop-filter:blur(14px)] w-full h-full top-0 left-0 z-[-1] rounded-[12px]"></div>
                            <div className="text-lg">
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                            </div>
                            <h4 className="text-white text-h4 font-[600] py-[14px]">1999 SUZUKI WAGON R 5D</h4>
                            <ul className="flex flex-row gap-[8px] p-0 m-0">
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">58,000km</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">R-Nagayo</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">Sold</span>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                    <div className="relative flex overflow-hidden items-end">
                        <img 
                            src="../images/featured-2.jpg"
                            alt="Featured Inventory"
                            className="absolute w-full h-full object-cover z-1 rounded-[12px]"    
                        />
                        <div className="flex flex-col z-20 p-[20px] w-full pt-[260px] pb-[24px]">
                            <div className="relative py-[24px] px-[20px] items-end">
                            <div className="absolute bg-white bg-opacity-20 [backdrop-filter:blur(14px)] w-full h-full top-0 left-0 z-[-1] rounded-[12px]"></div>
                            <div className="text-lg">
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                            </div>
                            <h4 className="text-white text-h4 font-[600] py-[14px]">1999 SUBARU LEGACY TOURING WAGON 4WD GT-B E-TUNE</h4>
                            <ul className="flex flex-row gap-[8px] p-0 m-0">
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">132,000km</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">R-Nagayo</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">Sold</span>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="relative flex overflow-hidden items-end">
                        <img 
                            src="../images/featured-3.jpg"
                            alt="Featured Inventory"
                            className="absolute w-full h-full object-cover z-1 rounded-[12px]"    
                        />
                        <div className="flex flex-col z-20 p-[20px] w-full pt-[260px] pb-[24px]">
                            <div className="relative py-[24px] px-[20px] items-end">
                            <div className="absolute bg-white bg-opacity-20 [backdrop-filter:blur(14px)] w-full h-full top-0 left-0 z-[-1] rounded-[12px]"></div>
                            <div className="text-lg">
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                                <i className="ri-star-fill text-white"></i>
                            </div>
                            <h4 className="text-white text-h4 font-[600] py-[14px]">1996 SUZUKI JIMNY 3D 4WD</h4>
                            <ul className="flex flex-row gap-[8px] p-0 m-0">
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">142,000km</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">R-Nagayo</span>
                                </li>
                                <li className="relative bg-white border-[0.5px] border-[#4A0CB6] py-[2px] px-[10px] rounded-[8px] text-[#4A0CB6] text-[14px] leading-[20px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[26px] before:absolute before:top-[1px] before:l-[0px]">
                                        <span className="pl-[20px]">Sold</span>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturedInventory;