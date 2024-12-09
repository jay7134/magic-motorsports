import { Link } from "react-router-dom";
import Card from "../components/Card";
import Faqs from "../components/Faqs";
import FeaturedInventory from "../components/FeaturedInventory";
import Layout from "../components/Layout";
const JapaneseAuctions = ()=>{
    return(
        <Layout>

            <section className="relative overflow-hidden">
                
                <img 
                    src="../images/bg-japanese.jpg"
                    alt=""
                    aria-hidden={true}
                    className="absolute left-0 top-0 w-full h-full object-cover z-1"
                />
                <div className="absolute left-0 top-0 w-full h-full before:content-[''] before:bg-black-gradient before:absolute before:top-0 before:w-full before:h-full"></div>
                
                <div className="container flex relative justify-between items-start py-[60px] z-[10] animate__animated animate__fadeIn">
                        
                    <img 
                        src="../images/auctions-1.png"
                        alt=""
                        aria-hidden={true}
                        className="w-full h-full object-cover max-w-[340px] animate__animated animate__fadeInLeft"
                    />
            
                </div>
            
            </section>
            
            <section className="bg-white">
                
                <div className="container grid grid-cols md:grid-cols-2 gap-[32px] md:gap-[80px] justify-between py-[80px]">
                    
                        <div>
                            <h1 className="text-[40px] leading-[48px] md:text-h1 md:leading-[80px] font-[600] text-black">
                                Unlock Exclusive JDM Access
                            </h1>
                        </div>

                        <div>
                            
                            <p className="text-[13px] md:text-normal text-black font-[400] py-4">To get started, sign up for our auction system and submit a deposit. This deposit grants you access to a wide marketplace of Japanese vehicles and ensures genuine interest in acquiring a vehicle. Inside our system, you can browse all Japan auctions. When you find a vehicle, Magic Motorsports handles the auction win and import process, ensuring a smooth journey to your doorstep.</p>
                            
                            <div className="flex flex-col md:flex-row gap-4 pt-6 animate__animated animate__fadeInUp">
                            
                                <button className="text-white text-sm font-[600] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-lg px-5 h-[48px]">Signup</button>
                            
                                <Link to="/contact-us">
                                    <button className="w-full md:w-auto text-[#4A0CB6] hover:text-white transition duration-300 text-sm font-[600] leading-[21px] border-2 border-[#4A0CB6] hover:bg-[#4A0CB6] rounded-[8px]  px-5 h-[48px]">Consultation with us</button>
                                </Link>
                            
                            </div>
                        
                        </div>

                </div>

            </section>
            
            <section className="bg-[#F8F8FA]">
                
                <div className="container grid grid-cols md:grid-cols-2 gap-[32px] md:gap-[80px] justify-between py-[30px] md:py-[80px]">
                    
                        <div className="relative flex min-h-[485px] overflow-hidden">
                            <img 
                                src="../images/bg-bidding-guide.jpg"
                                alt=""
                                aria-hidden={true}
                                className="absolute w-full h-full object-cover rounded-[20px]"
                            />
                        </div>
                        
                        <div className="flex flex-col px-[20px] md:px-[40px] py-[40px]">

                            <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600] text-[#101828]">
                                Your Guide to Bidding Success
                            </h2>

                            <p className="text-[13px] md:text-normal text-[#475467] font-[400] py-4">
                                Follow our simple steps to join and start bidding with confidence
                            </p>

                            <div className="divide-y">

                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">01.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Register an Account: Sign up on our platform to access live Japanese auctions</span>
                                </div>
                                
                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">02.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Browse Available Vehicles: Explore the wide range of JDM cars listed for auction.</span>
                                </div>
                                
                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">03.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Request an Inspection: Get a detailed report on any vehicle before placing a bid.</span>
                                </div>
                                
                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">04.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Place Your Bid: Submit your bid with confidence, knowing you have all the necessary information.</span>
                                </div>
                                
                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">05.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Monitor Your Auction: Stay updated on your bid status in real-time.</span>
                                </div>
                                
                                <div className="flex flex-row items-center gap-[16px] py-[20px]">
                                    <span className="text-[#101828] text-[28px] leading-[39px] font-[500]">06.</span> 
                                    <span className="text-[#475467] text-[14px] leading-[21px] font-[400]">Complete the Purchase: If you win, we handle the payment, paperwork, and import logistics.</span>
                                </div>             
                            
                            </div>
                    
                    </div>
                
                </div>
            
            </section>

            <section className="bg-[#F8F8FA]">
                
                <div className="container grid grid-cols justify-between pt-[50px]">
                    
                    <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600] text-[#101828] max-w-[615px]">
                        Experience Our Auction Service in Action
                    </h2>

                    <p className="text-[13px] md:text-normal text-[#475467] font-[400] py-[24px]">
                        Watch a Demo of How We Bring JDM Vehicles to You
                    </p>
                        
                </div>

                <div className="container">
                
                </div>
            
            </section>
            
            <FeaturedInventory title="Explore Available Vehicles" desc="Browse the latest JDM cars up for auction and find your next ride."/>
            
            <section className="bg-[#463467]">
            
                <div className="container py-[100px]">

                    <div className="md:max-w-[768px]">
            
                        <h2 className="text-white text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600]">
                            Master the Art of Bidding
                        </h2>
            
                        <p className="text-white text-[13px] leading-[19px] md:leading-[27px] md:text-sm font-[400] py-[12px]">Understand the bidding process and get tips to maximize your chances.</p>
            
                    </div>
                
                        <div className="grid grid-cols md:grid-cols-3 gap-[20px] pt-[40px]">
                            
                            <Card title="Understand the Auction Dynamics" desc="Familiarize yourself with how Japanese auctions operate, including bidding increments and timing"/>
                            
                            <Card title="Set a Budget" desc="Determine your maximum bid amount to avoid overspending"/>
                            
                            <Card title="Leverage Inspection Reports" desc="Use detailed reports to assess the vehicle’s condition before bidding"/>
                            
                            <Card title="Monitor Bids Closely" desc="Keep an eye on the auction as it progresses, making adjustments if necessary"/>
                            
                            <Card title="Confirm Your Win" desc="Once you win, we guide you through the purchase and import process."/>
                            
                            <Card title="Bid Strategically" desc="Place your bid strategically, considering the auction’s pace and competition"/>
                        
                        </div>
                    
                </div>
            
            </section>
            
            <Faqs/>

            <section className="relative overflow-hidden">
                
                <img 
                    src="../images/bg-footer.jpg"
                    alt=""
                    aria-hidden={true}
                    className="absolute left-0 top-0 w-full h-full object-cover z-1"
                />
                <div className="absolute left-0 top-0 w-full h-full before:content-[''] before:bg-black-gradient2 before:absolute before:top-0 before:w-full before:h-full"></div>
                
                <div className="container flex flex-col relative justify-between items-start py-[140px] z-[10]">
                        
                    <h2 className="text-white text-[40px] leading-[48px] md:text-h2 md:leading-[62px] font-[600] sm:max-w-[400px]">
                        Get ready to bid now!
                    </h2>
            
                    <p className="text-white text-[13px] leading-[19px] md:leading-[27px] md:text-normal font-[400] py-[12px] sm:max-w-[400px]">Register today and start your journey to owning a JDM vehicle</p>

                    <button className="text-white text-sm font-[600] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-lg px-5 h-[48px]">Signup</button>
                                
                </div>
            
            </section>
        
        </Layout>
    )
}

export default JapaneseAuctions;