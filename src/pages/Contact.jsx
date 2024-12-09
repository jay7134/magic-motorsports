import Faqs from "../components/Faqs";
import ImportService from "../components/ImportService";
import Layout from "../components/Layout";
const Contact = ()=>{
    return(
        <Layout>
            <section className="bg-white px-0">
                
                <div className="container grid grid-cols md:grid-cols-2 gap-18 items-center relative z-10 my-10 animate__animated animate__fadeIn">
                    <div className="px-[20px] md:px-[80px] py-[40px] md:py-[80px]">
                        
                        <h1 className="text-[#101828] text-[40px] leading-[48px] md:text-h2 font-[700] animate__animated animate__fadeInUp">
                            Contact us
                        </h1>
                        
                        <p className="text-[#475467] text-[13px] md:text-normal font-[400] py-4 m-w-[610] animate__animated animate__fadeInUp">
                            Our friendly team would love to hear from you.    
                        </p>
                        
                        <form className="animate__animated animate__fadeInUp">
                            
                            <div className="grid grid-cols sm:grid-cols-2 gap-1 md:gap-4">
                                
                                <div className="mb-[10px]">
                                    <label className="text-[#344054] font-sm font-[500] leading-[24px]">First name</label>
                                    <input 
                                        type="text" 
                                        name="firstname"
                                        className="text-sm text-[#667085] font-[400] block bg-transparent border boreder-[1px] border-[#D0D5DD] w-full outline-none py-2 px-2 rounded-[8px] mt-[5px]"    
                                        placeholder="First name"  
                                    />
                                </div>
                                
                                <div className="mb-[10px]">
                                    <label className="text-[#344054] font-sm font-[500] leading-[24px]">Last name</label>
                                    <input 
                                        type="text" 
                                        name="lastname"
                                        className="text-sm text-[#667085] font-[400] block bg-transparent border boreder-[1px] border-[#D0D5DD] w-full outline-none py-2 px-2 rounded-[8px] mt-[5px]"    
                                        placeholder="Last name"  
                                    />
                                </div>

                            </div>

                            <div className="grid grid-cols">
                                <div className="mb-[10px]">
                                    <label className="text-[#344054] font-sm font-[500] leading-[24px]">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        className="text-sm text-[#667085] font-[400] block bg-transparent border boreder-[1px] border-[#D0D5DD] w-full outline-none py-2 px-2 rounded-[8px] mt-[5px]"
                                        placeholder="you@company.com"  
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols relative">
                                
                                <div className="absolute left-[2px] top-[24px]">
                                    
                                    <select name="country" className="text-sm text-[#667085] font-[400] block bg-transparent w-[60px] outline-none py-2 px-2 rounded-[8px] mt-[5px]">
                                    
                                        <option className="text-sm font-[400] text-black" value="US">US</option>
                                        <option className="text-sm font-[400] text-black" value="UK">UK</option>
                                        <option className="text-sm font-[400] text-black" value="CA">CA</option>

                                    </select>
                                </div>
                                
                                <div className="mb-[10px]">
                                    <label className="text-[#344054] font-sm font-[500] leading-[24px]">Phone number</label>
                                    <input 
                                        type="number" 
                                        name="phone"
                                        className="pl-[70px] text-sm text-[#667085] font-[400] block bg-transparent border boreder-[1px] border-[#D0D5DD] w-full outline-none py-2 px-2 rounded-[8px] mt-[5px]"
                                        placeholder="+1 (555) 000-0000"  
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols">
                                <div className="mb-[10px]">
                                    <label className="text-[#344054] font-sm font-[500] leading-[24px]">Message</label>
                                    <textarea 
                                        name="message"
                                        rows={5}
                                        className="min-h[134px] text-sm text-[#667085] font-[400] block bg-transparent border boreder-[1px] border-[#D0D5DD] w-full outline-none py-2 px-2 rounded-[8px] mt-[5px]"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="grid grid-cols">
                                <div className="mt-[10px] mb-[32px]">
                                    <label className="text-[#475467] font-sm font-[400] leading-[24px] cursor-pointer flex flex-row items-center gap-[10px]">
                                        <input 
                                            type="checkbox" 
                                            name="agree"
                                            className="text-sm text-[#667085] font-[400] bg-transparent border boreder-[1px] border-[#D0D5DD] w-[20px] h-[20px] outline-none py-2 px-2 rounded-[8px]" 
                                        /> <span>You agree to our friendly privacy policy.</span>
                                    </label>

                                </div>
                            </div>

                            <button className="text-white text-sm font-[600] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-[8px] px-5 h-[48px] w-full">Send message</button>
                            
                        </form>
                        
                    </div>

                    <div className="relative overflow-hidden min-h-[400px] md:min-h-[100%]">
                        
                        <iframe className="absolute left-0 top-0 w-full h-full min-h-[100vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.645344758232!2d-77.2577972!3d38.9092248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64bb4a00d30f1%3A0x6db8d33877601070!2s501%20Church%20St%20NE%2C%20Vienna%2C%20VA%2022180%2C%20USA!5e0!3m2!1sen!2s!4v1733746547594!5m2!1sen!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                   
                    </div>
                    
                </div>
    
            </section>

            <ImportService/>

            <section className="bg-white pt-[52px] md:pt-[100px]">
                
                <div className="container grid grid-cols text-center">
                    <div>    
                        <h2 className="text-[#101828] text-[40px] leading-[48px] md:text-h2 font-[600]">
                            We’d love to hear from you
                        </h2>
                        
                        <p className="text-[#475467] text-[13px] md:text-normal font-[400] pt-[20px] pb-[50px]">
                            Chat to our friendly team. 
                        </p>

                        <div className="relative flex overflow-hidden w-full min-h-[400px] md:min-h-[600px] max-w-[1280px] mx-auto">
                            <img 
                                src="../images/bg-img-1.jpg"
                                alt=""
                                aria-hidden={true}
                                className="absolute left-0 top-0 w-full h-full object-cover rounded-[12px]"
                            />
                            <div className="absolute left-0 top-0 w-full h-full before:content-[''] before:bg-black-gradient before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[12px]"></div>
                            
                        </div>
                    </div>
                    
                    <div className="grid grid-cols md:grid-cols-3 text-left pt-[40px] gap-[20px] max-w-[1280px] mx-auto w-full">

                        <div className="bg-[#F8F9FC] border border-[#E7E8ED] border-[1px] p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img src="../images/chat.svg" 
                                className="bg-[#4A0CB6] rounded-[10px] w-[52px] h-[52px] p-[12px]"
                                aria-hidden={true} 
                            />
                            <h4 className="text-[#101828] text-[20px] leading-[28px] font-[600] pt-[60px] pb-[20px]">Chat to sales</h4>
                            <p className="text-[#475467] text-[16px] leading-[21px] font-[400] pb-[20px]">Speak to our friendly team.</p>
                            <p className="text-[#4A0CB6] text-[16px] leading-[21px] font-[600]">sales@magicmotorsports.xyz</p>
                        </div>

                        <div className="bg-[#F8F9FC] border border-[#E7E8ED] border-[1px] p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img src="../images/location.svg" 
                                className="bg-[#4A0CB6] rounded-[10px] w-[52px] h-[52px] p-[12px]"
                                aria-hidden={true} 
                            />
                            <h4 className="text-[#101828] text-[20px] leading-[28px] font-[600] pt-[60px] pb-[20px]">Visit us</h4>
                            <p className="text-[#475467] text-[16px] leading-[21px] font-[400] pb-[20px]">Visit our office HQ.</p>
                            <p className="text-[#4A0CB6] text-[16px] leading-[21px] font-[600] max-w-[205px]">501 Church Street NE Vienna, Virginia 22180</p>
                        </div>

                        <div className="bg-[#F8F9FC] border border-[#E7E8ED] border-[1px] p-[24px] rounded-[12px] shadow-[0_12px_26px_0px_rgba(13,15,36,0.06)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                            <img src="../images/phone.svg" 
                                className="bg-[#4A0CB6] rounded-[10px] w-[52px] h-[52px] p-[12px]"
                                aria-hidden={true} 
                            />
                            <h4 className="text-[#101828] text-[20px] leading-[28px] font-[600] pt-[60px] pb-[20px]">Call us</h4>
                            <p className="text-[#475467] text-[16px] leading-[21px] font-[400] pb-[20px]">Mon-Fri from 8am to 5pm.</p>
                            <p className="text-[#4A0CB6] text-[16px] leading-[21px] font-[600]">703-249-9922</p>
                        </div>

                    </div>

                </div>

            </section>
            
            
            <Faqs/>
        </Layout>
    )
}

export default Contact;