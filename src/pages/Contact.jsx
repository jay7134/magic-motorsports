import Faqs from "../components/Faqs";
import ImportService from "../components/ImportService";
import Layout from "../components/Layout";
const Contact = ()=>{
    return(
        <Layout>
            <section className="bg-white py-[100px]">
                
                <div className="container grid grid-cols md:grid-cols-2 gap-18 items-center justify-between relative z-10 my-10 animate__animated animate__fadeIn">
                    <div className="px-[20px] md:px-[80px]">
                        
                        <h1 className="text-[#101828] text-[40px] leading-[48px] md:text-h2 font-[700] animate__animated animate__fadeInUp">
                            Contact us
                        </h1>
                        
                        <p className="text-[#475467] text-[13px] md:text-normal font-[400] py-4 m-w-[610] animate__animated animate__fadeInUp">
                            Our friendly team would love to hear from you.    
                        </p>
                        
                        <form>
                            
                            <div className="grid grid-cols sm:grid-cols-2 gap-4">
                                
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
                                    
                                        <option className="text-sm font-[400] text-black">US</option>
                                        <option className="text-sm font-[400] text-black">UK</option>
                                        <option className="text-sm font-[400] text-black">CA</option>

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
                                            placeholder="you@company.com"  
                                        /> <span>You agree to our friendly privacy policy.</span>
                                    </label>

                                </div>
                            </div>

                            <button className="text-white text-sm font-[600] leading-[21px] bg-[#4A0CB6] transition duration-300 hover:bg-[#5e12e3] rounded-[8px] px-5 h-[48px] w-full">Send message</button>
                            
                        </form>
                        
                    </div>
                    <div className="">
                        
                    </div>
                    
                </div>
    
            </section>

            <ImportService/>
            <Faqs/>
        </Layout>
    )
}

export default Contact;