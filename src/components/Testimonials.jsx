const Testimonials = ()=>{
    return(
        <section className="bg-white">
            <div className="container py-[100px]">
                <h2>Customer testimonials</h2>
                <p>Hear from those who found their dream cars through our auctions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div className="">
                        <h2 className="text-white text-[40px] font-[600]">Our Services</h2>
                        <p className="text-white text-sm font-[400]">Explore our full range of services designed to make your JDM vehicle purchase smooth and worry-free. From initial inspections to secure purchases and timely delivery, we take care of every detail, ensuring a seamless experience from start to finish. Trust our expertise to guide you through each step, so you can focus on enjoying your new ride.</p>
                    </div>
                    <div className="">
                        <div className="">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>“This is a great, honest, and very solid import company that isn't going to screw you over and they're great at doing what they do. 10/5 stars and it was a great experience getting everything together and finally receiving the car. I greatly appreciate Conor and Magic MotorSports!”</p>
                        <p>— Alberto Calderon</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;