const Services = ()=>{
    return(
        <section className="bg-[#463467]">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-[100px]">
                <div className="">
                    <h2 className="text-white text-[40px] font-[600]">Our Services</h2>
                    <p className="text-white text-sm font-[400]">Explore our full range of services designed to make your JDM vehicle purchase smooth and worry-free. From initial inspections to secure purchases and timely delivery, we take care of every detail, ensuring a seamless experience from start to finish. Trust our expertise to guide you through each step, so you can focus on enjoying your new ride.</p>
                </div>
                <div className="">
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <i className="bg-white rounded-lg ri-global-line text-[32px] bg-text-white p-2 w-[48px] h-[48px]"></i>
                        <h4 className="text-white text-[20px] leading-[28px] font-[600] py-3">Browse Inventory</h4>
                        <p className="text-white text-[14px] leading-[21px] font-[400]">Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img 
                            src="../images/icon-globe.svg" alt="" 
                            className="w-[48px] h-[48px]"
                            aria-hidden="true"    
                        />
                        <h4 className="text-lg font-[600] py-3">Browse Inventory</h4>
                        <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img 
                            src="../images/icon-globe.svg" alt="" 
                            className="w-[48px] h-[48px]"
                            aria-hidden="true"    
                        />
                        <h4 className="text-lg font-[600] py-3">Browse Inventory</h4>
                        <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img 
                            src="../images/icon-globe.svg" alt="" 
                            className="w-[48px] h-[48px]"
                            aria-hidden="true"    
                        />
                        <h4 className="text-white text-lg font-[600] py-3">Browse Inventory</h4>
                        <p>Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;