const Services = ()=>{
    return(
        <section className="bg-[#463467]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-[100px]">
                <div className="max-w-[480px]">
                    <h2 className="text-white text-h2 leading-[62px] font-[600]">Our Services</h2>
                    <p className="text-white text-sm font-[400] py-[18px]">Explore our full range of services designed to make your JDM vehicle purchase smooth and worry-free. From initial inspections to secure purchases and timely delivery, we take care of every detail, ensuring a seamless experience from start to finish. Trust our expertise to guide you through each step, so you can focus on enjoying your new ride.</p>
                </div>
                <div>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img src="../images/global.svg" 
                            className="bg-white rounded-[12px] border-[2px] border-[#EAECF0] w-[52px] h-[52px] p-[12px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]"
                            aria-hidden={true} 
                        />
                        <h4 className="text-white text-[20px] leading-[28px] font-[600] py-[16px]">Import</h4>
                        <p className="text-white text-[14px] leading-[21px] font-[400]">Seamlessly import authentic JDM vehicles with our expert handling of all paperwork and compliance</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img src="../images/global.svg" 
                            className="bg-white rounded-[12px] border-[2px] border-[#EAECF0] w-[52px] h-[52px] p-[12px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]"
                            aria-hidden={true} 
                        />
                        <h4 className="text-white text-[20px] leading-[28px] font-[600] py-[16px]">JDM auctions</h4>
                        <p className="text-white text-[14px] leading-[21px] font-[400]">Access exclusive Japanese auctions with our transparent bidding and inspection services.</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img src="../images/global.svg" 
                            className="bg-white rounded-[12px] border-[2px] border-[#EAECF0] w-[52px] h-[52px] p-[12px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]"
                            aria-hidden={true} 
                        />
                        <h4 className="text-white text-[20px] leading-[28px] font-[600] py-[16px]">Inventory</h4>
                        <p className="text-white text-[14px] leading-[21px] font-[400]">Explore our curated selection of in-stock JDM vehicles, ready for immediate purchase</p>
                    </div>
                    <div className="bg-white bg-opacity-20 p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)]">
                        <img src="../images/global.svg" 
                            className="bg-white rounded-[12px] border-[2px] border-[#EAECF0] w-[52px] h-[52px] p-[12px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]"
                            aria-hidden={true} 
                        />
                        <h4 className="text-white text-[20px] leading-[28px] font-[600] py-[16px]">Parts</h4>
                        <p className="text-white text-[14px] leading-[21px] font-[400]">Find genuine JDM parts and accessories to keep your vehicle in top condition</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;