const ViewAuctions = ()=>{
    return(
        <section className="bg-[#D7D6D8] py-[80px]">
            <div className="container grid grid-cols md:grid-cols-2 items-center gap-[80px]">
                
                
                <img src="../images/jdm-auction.jpg" alt="view auctions" className="w-full max-w-[658px] h-full rounded-[8px]"/>
                
                <div>
                    <h2 className="text-[40px] leading-[48px] md:text-[48px] md:leading-[57px] text-black font-[700] max-w-[460px]">VIEW THE JDM AUCTIONS</h2>
                    <p className="text-sm md:text-normal text-black font-[400] py-[24px] max-w-[460px]">Start Your Journey Today—Bring Home the JDM Car You’ve Always Dreamed Of</p>
                    <button className="text-white text-sm font-[400] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-lg px-5 h-[48px]">Discover More</button>
                </div>
                
            </div>
        </section>
    )
}

export default ViewAuctions;