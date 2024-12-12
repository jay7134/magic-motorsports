import { useEffect } from "react";
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import Carousel from "./Carousel";

const FeaturedInventory = ({title,desc})=>{
    
    useEffect(()=>{
        const flkty = new Flickity('.featuredcarousel', {
            contain: true,
            imagesLoaded: true,
            prevNextButtons: false,
        });
        return () => flkty.destroy();
    },[]);

    return(
        <section id="featured-inventory" className="relative bg-white py-[100px]">
            <div className="container">
                <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-black font-[600] text-center">{ title ? title : "Featured inventory" }</h2>
                { desc ? <p className="pt-[12px] text-normal text-[#475467] font-[400] text-center">{desc}</p> : '' }
                
                    
                
            </div>
            <div className="container pt-[50px] pb-[10px] w-full">
                <div className="featuredcarousel">
                       <Carousel/>
                        {/* <div className="carousel-cell mr-5"><img src="../images/carousel/s-img1.png" className="w-full max-w-[406px]"/></div>
                        <div className="carousel-cell mr-5"><img src="../images/carousel/s-img2.png" className="w-full max-w-[406px]"/></div>
                        <div className="carousel-cell mr-5"><img src="../images/carousel/s-img3.png" className="w-full max-w-[406px]"/></div> */}
                </div>
            </div>
        </section>
    )
}

export default FeaturedInventory;