const JDMDelivery = ()=>{
    return(
        <section className="relative overflow-hidden">
            <div className="black-gradient absolute w-full h-full object-cover z-2 left-0"></div>
            <img 
                src="../images/jdm-home.jpg"
                alt="Featured Inventory"
                className="absolute w-full h-full object-cover z-1 left-0"    
            />
            <div className="container black-gradient">
                
                <div className="relative flex flex-cols md:flex-row justify-between items-end gap-[32px] px-[60px] pt-[200px] z-20">
                    <div>
                        
                        <span className="bg-white bg-opacity-20 text-white text-[14px] font-[500] leading-[20px] px-[12px] py-[8px] rounded-[6px]">Delivered with Expertise and Care</span>
                        
                        <h2 className="text-h2 text-white leading-[62px] font-[600] py-[16px]">From Japan To Your Door</h2>
                        <p className="text-white text-normal font-[400] max-w-[672px] py-[8px]">Magic Motorsports is your all-in-one solution for bringing the JDM vehicle of your dreams to your driveway. Why choose us?</p>
                    </div>
                    <div>
                        <button className="text-white hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-white hover:bg-[#D6BBFB] hover:border-[#D6BBFB] rounded-lg  px-5 h-[48px]">Learn more</button>
                    </div>
                </div>

                <div className="relative grid grid-cols md:grid-cols-2 lg:grid-cols-3 z-20 pt-[80px] px-[60px]">
                    <div className="relative border-l-[1px] border-[rgba(255,255,255,0.4)] p-[40px]">
                        <div className="absolute custom-gradient [backdrop-filter:blur(3px)] w-full h-full top-0 left-0 z-[-1]"></div>
                        <h4 className="text-[20px] text-white leading-[28px] font-[700] py-[16px]">Complete In-House Services</h4>
                        <p className="text-white text-[14px] font-[400]">From pre-purchase inspections to handling all import and export paperwork, our team manages every step. Your vehicle arrives at the port cleared for pickup or delivery—no surprises, no hidden fees.</p>
                    </div>
                    <div className="relative border-l-[1px] border-[rgba(255,255,255,0.4)] p-[40px]">
                        <div className="absolute custom-gradient [backdrop-filter:blur(3px)] w-full h-full top-0 left-0 z-[-1]"></div>
                        <h4 className="text-[20px] text-white leading-[28px] font-[700] py-[16px]">Transparent Pricing</h4>
                        <p className="text-white text-[14px] font-[400]">We believe in full transparency. The price you see is the total cost, making it effortless to own your dream JDM vehicle.</p>
                    </div>
                    <div className="relative border-l-[1px] border-r-[1px] border-[rgba(255,255,255,0.4)] p-[40px]">
                        <div className="absolute custom-gradient [backdrop-filter:blur(3px)] w-full h-full top-0 left-0 z-[-1]"></div>
                        <h4 className="text-[20px] text-white leading-[28px] font-[700] py-[16px]">Versatile Import Options</h4>
                        <p className="text-white text-[14px] font-[400]">We specialize in importing vehicles that are 25 years or older, ensuring compliance with U.S. regulations. Got your eye on a newer model? We've got storage solutions until your dream car is eligible for import.</p>
                    </div>
                    
                </div>

            </div>
        </section>            
    )
}

export default JDMDelivery;