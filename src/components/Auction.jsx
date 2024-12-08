const Auction = ()=>{
    return(
        <section className="bg-[#EFF1F8] pt-[24px] pb-[80px]">
            <div className="container rounded-t-[24px] grid grid-cols md:grid-cols-2 justify-between gap-10 pt-[60px] px-[10px] md:px-[56px]"
                style={
                    {
                        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
                    }
                }
            >
                <div className="max-w[580px]">
                    <span className="bg-[#D583E9] text-[14px] font-[500] bg-opacity-20 text-[#D583E9] px-3 py-2 rounded-md ">auction</span>
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-[#101828] font-[600] max-w-[550px] pt-[20px]">Bid on Your Dream JDM Vehicle</h2>
                    <p className="text-[13px] leading-[19px] md:leading-[27px] md:text-normal text-[#475467] font-[400] py-[24px]">Discover a wide selection of authentic JDM cars directly from Japanese auctions. Enjoy transparent bidding with detailed reports, competitive prices, and expert support. Let us handle the logistics while you focus on choosing your perfect ride.</p>
                    <div className="grid grid-cols-2 gap-[24px] pt-[16px] pb-[32px]">
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
                <div className="relative flex items-end min-h-[485px]">
                    <img 
                        src="../images/img1211.jpg"
                        alt=""
                        className="absolute w-full h-full object-cover rounded-[12px]"
                    />
                    <div className="max-w-[400px] flex z-10 px-[20px] py-[28px] mx-auto md:mx-0">
                        
                        <img src="../images/auctions-1.png" alt="jdm autions" className="w-full h-full rounded-[14px]"/>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Auction;