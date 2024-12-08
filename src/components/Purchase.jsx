const Purchase = ()=>{
    return(
        <section className="bg-[#EFF1F8] pt-[24px] pb-[100px]">
            <div className="container rounded-b-[24px] grid grid-cols md:grid-cols-2 justify-between gap-10 pb-[90px] px-[10px] md:px-[56px]"
                style={
                    {
                        background: 'linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)'
                    }
                }
            >
                
                <div className="max-w[580px]">
                    <span className="bg-[#D583E9] text-[14px] font-[500] bg-opacity-20 text-[#D583E9] px-3 py-2 rounded-md ">purchases</span>
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-[#101828] font-[600] max-w-[550px] pt-[20px]">Easy and Secure Purchases</h2>
                    <p className="text-[13px] leading-[19px] md:leading-[27px] md:text-normal text-[#475467] font-[400] py-[24px]">Seamlessly purchase your JDM vehicle with our streamlined process. From securing your bid to final delivery, we handle everything.</p>
                    <div className="grid gap-[24px] pt-[16px] pb-[32px]">
                        <div className="flex flex-row items-center gap-[16px]">
                            <img 
                                src="../images/tick.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <div>
                                <h4 className="text-[20px] text-[#101828] font-[600]">Hassle-Free Transactions</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">We manage all the paperwork and payment processes</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[16px]">
                            <img 
                                src="../images/tick.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <div>
                                <h4 className="text-[20px] text-[#101828] font-[600]">Secure Payments</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">Enjoy safe and secure payment options</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[16px]">
                            <img 
                                src="../images/tick.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <div>
                                <h4 className="text-[20px] text-[#101828] font-[600]">Full Compliance</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">Ensure your vehicle meets all U.S. regulations</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[16px]">
                            <img 
                                src="../images/tick.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <div>
                                <h4 className="text-[20px] text-[#101828] font-[600]">Expert Assistance</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">Receive guidance from our experienced team throughout the purchase</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-[16px]">
                            <img 
                                src="../images/tick.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <div>
                                <h4 className="text-[20px] text-[#101828] font-[600]">Timely Delivery</h4>
                                <p className="text-[14px] text-[#475467] font-[400]">Get your JDM vehicle delivered promptly and safely to your location</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-end min-h-[485px]">
                    <img 
                        src="../images/purchases.jpg"
                        alt=""
                        className="absolute w-full h-full object-cover rounded-[12px]"
                    />
                    <div className="w-full flex z-10 p-[28px] mx-auto md:mx-0">
                        
                        <img src="../images/purchases-1.png" alt="jdm purchases" className="w-full h-full rounded-[14px]"/>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Purchase;