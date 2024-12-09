import Card from "./Card";

const Services = ()=>{
    return(
        <section className="bg-[#463467]">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 py-[100px]">
                <div className="md:max-w-[480px]">
                    <h2 className="text-white text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600]">Our Services</h2>
                    <p className="text-white text-[13px] leading-[19px] md:leading-[27px] md:text-sm font-[400] py-[18px]">Explore our full range of services designed to make your JDM vehicle purchase smooth and worry-free. From initial inspections to secure purchases and timely delivery, we take care of every detail, ensuring a seamless experience from start to finish. Trust our expertise to guide you through each step, so you can focus on enjoying your new ride.</p>
                </div>
                <div>
                    <div className="grid grid-cols md:grid-cols-2 gap-6">
                    
                        <Card title="Import" desc="Seamlessly import authentic JDM vehicles with our expert handling of all paperwork and compliance"/>
                        <Card title="JDM auctions" desc="Access exclusive Japanese auctions with our transparent bidding and inspection services."/>  
                        <Card title="Inventory" desc="Explore our curated selection of in-stock JDM vehicles, ready for immediate purchase"/>  
                        <Card title="Parts" desc="Find genuine JDM parts and accessories to keep your vehicle in top condition"/>      
                    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;