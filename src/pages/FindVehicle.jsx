import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Faqs from "../components/Faqs";
import ImportService from "../components/ImportService";

const FindVehicle = ()=>{

    const Item = ({title})=>{
        return(
            <div className="bg-[#F8F9FC] flex flex-row md:flex-col gap-[16px] md:gap-[0px] items-center md:items-start border-[1px] border-[#E7E8ED] rounded-[8px] p-[16px] md:p-[32px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                <img 
                    src="../images/tick.svg" alt="" 
                    className="w-[40px] h-[40px]"
                    aria-hidden="true"    
                />
                <div>
                    <h4 className="text-[18px] leading-[26px] text-[#101828] font-[500] pt-[0px] md:pt-[16px]">{title}</h4>
                </div>
            </div>
        );
    }
    
    return(
        <Layout>

        <section className="relative flex items-center justify-center overflow-hidden pb-[60px] px-[0px] md:px-[15px]">
                
            <div className="container grid grid-cols gap-18  pt-[110px] pb-[80px] px-6 relative z-10 my-10 animate__animated animate__fadeIn text-center">
                <div className="absolute inset-0 w-full h-full md:rounded-[30px] overflow-hidden z-[-1]">
                    <img
                        decoding="async"
                        src="../images/bg-img-3.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-hero-gradient2 md:bg-hero-gradient"></div>
                    
                </div>
                <div className="w-full max-w-[1080px] mx-auto h-[600px] flex flex-col justify-end items-end ">
                    <h1 className="text-[40px] leading-[48px] md:text-h1 md:text-h1 font-bold text-white animate__animated animate__fadeInUp">Finding Your Dream Vehicle from Japan</h1>
                    <p className="text-[13px] md:text-normal text-white font-[400] py-4 m-w-[610] animate__animated animate__fadeInUp">Looking to import your own vehicle from Japan? From Japanese auctions to private party purchases we're here to help you get the perfect one. Our straightforward and secure process makes purchasing a breeze. We charge a flat fee of $1000 for our all-inclusive service package covers everything from finding and inspecting your vehicle to purchasing, exporting, and importing it. To get started, simply submit your deposit through the provided link.</p>
                    <div className="flex flex-col md:flex-row gap-4 pt-6 w-full justify-center animate__animated animate__fadeInUp">
                        <button className="text-white text-sm font-[400] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-lg px-5 h-[48px]">Deposit</button>
                        <Link to="/contact-us">
                            <button className="w-full md:w-auto text-[#D6BBFB] hover:text-black transition duration-300 text-sm font-[400] leading-[21px] border-2 border-[#D6BBFB] hover:bg-[#D6BBFB] rounded-lg  px-5 h-[48px]">Consultation with us</button>
                        </Link>
                    </div>
                </div>
                
            </div>

        </section>

        <ImportService/>
        
        <section className="bg-white relative flex items-center justify-center py-[100px]">
                
            <div className="container">
                <div className="grid grid-cols pb-[32px]">
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-bold text-[#101828]">
                        Here's a breakdown of the costs:
                    </h2>
                    <p className="text-[13px] md:text-normal text-[#475467] font-[400] py-4 m-w-[610]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <p className="text-[13px] md:text-normal text-[#475467] font-[400]">
                        Want to know more? Fill out the contact form above or give us a call!
                    </p>
                </div>
                <div className="grid grid-cols md:grid-cols-3 gap-[24px]">

                    <Item title="Vehicle cost"/>
                    <Item title="Freight Shipping: $900 - $2050 (depends on vehicle type)"/>
                    <Item title="Japan Inland Transport: $200 - $800 (varies by location)"/>
                    <Item title="Export Fee: $500"/>
                    <Item title="Auction House Fees: $200"/>
                    <Item title="US import tariffs 2.5% + Harbor Maintenance Fee: 0.0125% + Processing Fee 0.346%"/>
                    <Item title="Terminal handling fee: $177.75"/>
                    <Item title="Import Fee: $350"/>
                    <Item title="MagicMotorsports Fee: $1000"/>
                
                </div>
                <div className="flex flex-col md:flex-row gap-4 pt-6">
                        
                        <Link to="/contact-us">
                            <button className="w-full md:w-auto text-[#4A0CB6] hover:text-white transition duration-300 text-sm font-[600] leading-[21px] border-2 border-[#4A0CB6] hover:bg-[#4A0CB6] rounded-[8px]  px-5 h-[48px]">Consultation with us</button>
                        </Link>

                </div>
            </div>

        </section>
        <section className="relative flex items-center justify-center overflow-hidden px-[0px]">
                
            <div className="container grid grid-cols items-center justify-between pt-[110px] pb-[80px] px-6 relative z-10 my-10 min-h-[600px]">
                <div className="absolute inset-0 w-full h-full overflow-hidden z-[-1]">
                    <img
                        decoding="async"
                        src="../images/bg-img2.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black-gradient"></div>
                    
                </div>
            </div>
        </section>
            <Faqs/>
        </Layout>
    )
}

export default FindVehicle;