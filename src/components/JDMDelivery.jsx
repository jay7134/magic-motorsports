const JDMDelivery = ()=>{
    return(
        <section className="relative overflow-hidden">
            <img 
                src="../images/jdm-home.jpg"
                alt="Featured Inventory"
                className="absolute w-full h-full object-cover z-1 left-0"    
            />
            <div className="container">
                
                <div className="relative grid grid-cols md:grid-cols-2 items-end gap-[32px] px-[60px] z-20">
                    <div>
                        <div>
                            <span>Delivered with Expertise and Care</span>
                        </div>
                        <h2 className="text-h2 text-white leading-[62px] font-[600] text-center pb-[56px]">From Japan To Your Door</h2>
                        <p>Magic Motorsports is your all-in-one solution for bringing the JDM vehicle of your dreams to your driveway. Why choose us?</p>
                    </div>
                    <div>
                        <button className="text-[#D6BBFB] hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-[#D6BBFB] hover:bg-[#D6BBFB] rounded-lg  px-5 h-[48px]">Learn more</button>
                    </div>
                </div>

                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-between space-around gap-[32px] overflow-hidden">
                    <div className="relative flex overflow-hidden items-end">
                        <div>
                            <span>Delivered with Expertise and Care</span>
                        </div>
                        <h2 className="text-h2 text-white leading-[62px] font-[600] text-center pb-[56px]">From Japan To Your Door</h2>
                        <p>Magic Motorsports is your all-in-one solution for bringing the JDM vehicle of your dreams to your driveway. Why choose us?</p>
                    </div>
                    <div>
                        <button className="text-[#D6BBFB] hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-[#D6BBFB] hover:bg-[#D6BBFB] rounded-lg  px-5 h-[48px]">Learn more</button>
                    </div>
                </div>

            </div>
        </section>            
    )
}

export default JDMDelivery;