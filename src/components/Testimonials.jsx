const Testimonials = ()=>{
    return(
        <section className="bg-[#F8F8FA]">
            <div className="container py-[96px]">
                <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-[#101828] font-[600] max-w-[650px]">Customer testimonials</h2>
                <p className="text-[13px] leading-[19px] md:leading-[27px] md:text-normal md:text-normal text-[#475467] font-[400] py-[12px]">Hear from those who found their dream cars through our auctions</p>
                    
                <div className="flex flex-col md:flex-row gap-[44px] items-center pt-[40px]">
                    <img 
                        src="../images/testimonial-1.jpg" alt="customer testimonials"
                        className="w-full max-w-[340px] h-full rounded-[16px]"
                    />
                    <div className="">
                        
                        <div className="">
                            <div className="text-xl gap-4">
                                <i className="ri-star-fill text-yellow-400"></i>
                                <i className="ri-star-fill text-yellow-400"></i>
                                <i className="ri-star-fill text-yellow-400"></i>
                                <i className="ri-star-fill text-yellow-400"></i>
                                <i className="ri-star-fill text-yellow-400"></i>
                            </div>
                            <p className="text-[20px] leading-[28px] md:text-[28px] md:leading-[42px] text-[#101828] font-[500] pt-[24px] pb-[32px] tracking-[0px]">“This is a great, honest, and very solid import company that isn't going to screw you over and they're great at doing what they do. 10/5 stars and it was a great experience getting everything together and finally receiving the car. I greatly appreciate Conor and Magic MotorSports!”</p>
                            <p>— Alberto Calderon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;