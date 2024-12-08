import { Link } from "react-router-dom";
import Faqs from "../components/Faqs";
import FeaturedInventory from "../components/FeaturedInventory";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Video from "../components/Video";
import Auction from "../components/Auction";
import Inspection from "../components/Inspection";
import Purchase from "../components/Purchase";
import Testimonials from "../components/Testimonials";
import ViewAuctions from "../components/ViewAuctions";
import JDMDelivery from "../components/JDMDelivery";
import Hero from "../components/Hero";

const Home = ()=>{
    return(

        <Layout>
            <Hero/>
            <section id="journey">

                <div className="container pt-[80px] pb-[50px]">
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[67px] text-[#101828] font-[600] max-w-[590px]">Your Journey to Owning a JDM Vehicle</h2>
                    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-[24px] py-10">
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img 
                                src="../images/icon-globe.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Browse Inventory</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Explore our extensive selection of JDM vehicles or participate in Japanese auctions to find your perfect car.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img 
                                src="../images/icon-vehicle.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Vehicle Selection</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Choose your desired vehicle and request a detailed pre-purchase inspection.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img 
                                src="../images/icon-ship.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Purchase and Import</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">We handle all import paperwork and ensure your vehicle meets U.S. regulations.</p>
                        </div>
                        <div className="bg-white p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img 
                                src="../images/icon-received.svg" alt="" 
                                className="w-[48px] h-[48px]"
                                aria-hidden="true"    
                            />
                            <h4 className="text-lg font-[600] text-[#101828] py-3">Receive Your Car</h4>
                            <p className="text-sm font-[400] text-[#475467] leading-[24px]">Once all procedures are complete, your JDM vehicle is delivered to your specified location.</p>
                        </div>
                    </div>
                </div>

            </section>

            <Auction/>
            <Inspection/>
            <Purchase/>
            <Video/>
            <Services/>
            <JDMDelivery/>
            <FeaturedInventory/>
            <Testimonials/>
            <ViewAuctions/>
            <Faqs/>
        </Layout>

    )
}

export default Home;