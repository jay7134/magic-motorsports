const Inspection = ()=>{
    return(
        <section className="bg-[#EFF1F8] pt-[24px] py-[100px]">
            <div className="container rounded-t-[24px] grid grid-cols md:grid-cols-2 justify-between gap-10 pt-[20px] px-[56px]">
                
                <div className="relative flex items-end">
                    <img 
                        src="../images/imports.jpg"
                        alt=""
                        className="absolute w-full h-full object-cover rounded-[12px]"
                    />
                    <div className="max-w-[400px] flex z-10 p-[12px] rounded-[12px]">
                        <div className="bg-white p-[12px] rounded-[12px] relative">
                        <div className="flex flex-cols-2 gap-4">
                            <div className="relative flex items-end w-[97px]">
                                <img src="../images/auction-1.jpg" 
                                    className="absolute w-full h-full object-cover rounded-[12px] z-8"
                                />
                                <span className="text-right relative w-full overflow-hidden px-[2px]">
                                    <span className="absolute bg-white [backdrop-filter:blur(3.98px)] opacity-40 rounded-tl-[15px] rounded-br-[15px] rounded-t-12 z-20 w-full h-full z-9"></span>
                                    <span className="text-white text-[10px] pl-[4px] font-[600]">Bid No: No.60020</span>
                                </span>
                            </div>
                            <div>
                                <span className="relative bg-[#F4F3FF] border-[0.5px] border-[#D9D6FE] py-[1px] px-[5px] rounded-[8px] text-[#4A0CB6] text-[9px] font-[500] 
                                    before:content-['\2022'] before:pr-2 before:text-[16px] before:absolute before:top-[-5px] before:l-[0px]">
                                        <span className="pl-[12px]">17,000km</span>
                                    </span>
                                <h4 className="text-black text-[10px] font-[700] py-[5px]">1996 NISSAN SERENA 4D FX</h4>
                                <div className="flex gap-2">
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <img src="../images/star.svg"
                                                aria-hidden={true}
                                            />
                                        </div>
                                        <span className="text-black text-[8px] font-[500]">Grade: 4</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <img src="../images/auction.svg"
                                                aria-hidden={true}
                                            />
                                        </div>
                                        <span className="text-black text-[8px] font-[500]">Nagoya</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <div>
                                            <img src="../images/calendar.svg"
                                                aria-hidden={true}
                                            />
                                        </div>
                                        <span className="text-black text-[8px] font-[500]">Jun 14, 2024 JST</span>
                                    </div>
                                </div>
                                <div className="border-b-[1px] border-[#000] border-opacity-20 pt-[6px]"></div>
                                <div className="pt-[8px] flex gap-2">
                                    <button className="bg-[#4A0CB6] text-[10px] text-white border-[0.5px] border-[#4A0CB6] rounded-[4px] px-[5px] py-[3px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]">View Details</button>
                                    <button className="bg-white text-[10px] text-[#344054] border-[0.5px] border-[#D0D5DD] rounded-[4px] px-[5px] py-[3px] shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)]">Add favorite</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="max-w[580px]">
                    <span className="bg-[#D583E9] text-[14px] font-[500] bg-opacity-20 text-[#D583E9] px-3 py-2 rounded-md ">inspection request</span>
                    <h2 className="text-h2 text-[#101828] leading-[62px] font-[600] max-w-[550px] pt-[20px]">Comprehensive Vehicle Inspection</h2>
                    <p className="text-normal text-[#475467] font-[400] py-[24px]">Get detailed insights into your desired JDM vehicle before you bid. Our inspection service ensures you have all the information needed to make an informed decision.</p>
                    <div className="grid grid-cols sm:grid-cols-2 gap-[24px] pt-[16px] pb-[32px]">
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
            </div>
        </section>
    )
}
export default Inspection;