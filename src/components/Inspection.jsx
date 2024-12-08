const Inspection = ()=>{
    return(
        <section className="bg-[#EFF1F8] pt-[24px] py-[100px]">
            <div className="container rounded-t-[24px] grid grid-cols md:grid-cols-2 justify-between gap-10 pt-[20px] px-[10px] md:px-[56px]">
                
                
                <div className="max-w[580px]">
                    <span className="bg-[#D583E9] text-[14px] font-[500] bg-opacity-20 text-[#D583E9] px-3 py-2 rounded-md ">inspection request</span>
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600] max-w-[550px] pt-[20px]">Comprehensive Vehicle Inspection</h2>
                    <p className="text-[13px] leading-[19px] md:leading-[27px] text-normal text-[#475467] font-[400] py-[24px]">Get detailed insights into your desired JDM vehicle before you bid. Our inspection service ensures you have all the information needed to make an informed decision.</p>
                    <div className="grid grid-cols-2 gap-[24px] pt-[16px] pb-[32px]">
                        <div className="gap-[16px]">
                            <img 
                                src="../images/ins-1.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            
                            <h4 className="text-[20px] text-[#101828] font-[600] py-[12px]">Informed Decisions</h4>
                            <p className="text-[14px] text-[#475467] font-[400]">Access detailed vehicle information before bidding</p>
                            
                        </div>
                        <div className="gap-[16px]">
                            <img 
                                src="../images/f3.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-[20px] text-[#101828] font-[600] py-[12px]">Transparency</h4>
                            <p className="text-[14px] text-[#475467] font-[400]">Receive comprehensive reports on car condition and auction details</p>
                            
                        </div>
                        <div className="gap-[16px]">
                            <img 
                                src="../images/ins-3.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-[20px] text-[#101828] font-[600] py-[12px]">Risk Reduction</h4>
                            <p className="text-[14px] text-[#475467] font-[400]">Minimize the risk of unexpected issues with thorough inspections</p>
                            
                        </div>
                        <div className="gap-[16px]">
                            <img 
                                src="../images/ins-2.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-[20px] text-[#101828] font-[600] py-[12px]">Confidence</h4>
                            <p className="text-[14px] text-[#475467] font-[400]">Bid confidently knowing the vehicle’s status and quality</p>
                            
                        </div>
                    </div>
                </div>

                <div className="order-last md:order-first relative flex justify-end items-end min-h-[485px]">
                    <img 
                        src="../images/imports.jpg"
                        alt=""
                        className="absolute w-full h-full object-cover rounded-[12px]"
                    />
                    <div className="max-w-[400px] flex z-10 p-[28px] mx-auto md:mx-0">
                        
                        <img src="../images/imports-1.png" alt="jdm imports" className="w-full h-full rounded-[14px]"/>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default Inspection;