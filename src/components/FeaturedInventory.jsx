const FeaturedInventory = ()=>{
    return(
        <section id="featured-inventory" className="bg-white py-[100px] overflow-hidden">
            <div className="container">
                <h2>Featured inventory</h2>
                <div className="flex flex-col md:flex-row justify-between space-around gap-8 overflow-hidden">
                    <div className="relative p-4">
                        <img 
                            src="../images/featured-1.jpg"
                            alt="Featured Inventory"
                            className="absolute inset-0 w-full h-full object-cover overflow-hidden z-1"    
                        />
                        <div className="flex flex-col z-20">
                            <div className="">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                            <h4>1999 SUZUKI WAGON R 5D</h4>
                            <ul className="flex flex-row gap-6 p-0 m-0">
                                <li className="border-2 rounded-full justify-between items-center px-[20px]">
                                    <i className="ri-circle-fill text-[12px]"></i> 
                                    <span>58,000km</span>
                                </li>
                                <li>R-Nagayo</li>
                                <li>Sold</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        
                        <h4>1999 SUZUKI WAGON R 5D</h4>
                        <ul className="flex">
                            <li>58,000km</li>
                            <li>R-Nagayo</li>
                            <li>Sold</li>
                        </ul>
                    </div>
                    <div className="">
                        
                        <h4>1999 SUZUKI WAGON R 5D</h4>
                        <ul className="flex">
                            <li>58,000km</li>
                            <li>R-Nagayo</li>
                            <li>Sold</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedInventory;