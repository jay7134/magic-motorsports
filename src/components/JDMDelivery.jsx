const JDMDelivery = ()=>{
    return(
        <section id="featured-inventory" className="relative bg-white overflow-hidden">
            <img 
                src="../images/jdm-home.jpg"
                alt="Featured Inventory"
                className="absolute w-full h-full object-cover z-1 left-0"    
            />
            <div className="container">
                
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 justify-between space-around gap-[32px] overflow-hidden">
                    <div className="relative flex overflow-hidden items-end">
                        <h2 className="text-h2 text-white leading-[62px] font-[600] text-center pb-[56px]">From Japan To Your Door</h2>
                    </div>
                </div>
            </div>
        </section>            
    )
}

export default JDMDelivery;