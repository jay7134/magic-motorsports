import { useEffect } from "react";
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

const FeaturedInventory = ({title,desc})=>{
    
    useEffect(()=>{
        const flkty = new Flickity('.featuredcarousel', {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            imagesLoaded: true,
            autoPlay: 3000,
            prevNextButtons: false,
            freeScroll: true,
            pageDots: true,
        });
        return () => flkty.destroy();
    },[]);

    return(
        <section id="featured-inventory" className="relative bg-white py-[100px]">
            <div className="container">
                <h2 className="text-[40px] leading-[48px] md:text-h2 md:leading-[62px] text-black font-[600] text-center">{ title ? title : "Featured inventory" }</h2>
                { desc ? <p className="pt-[12px] text-normal text-[#475467] font-[400] text-center">{desc}</p> : '' }
                
                    
                
            </div>
            <div className="container">
                <div className="featuredcarousel pt-[50px] pb-[90px] w-full">
                        <div className="carousel-cell mr-4"><img src="../images/carousel/s-img1.png"/></div>
                        <div className="carousel-cell mr-4"><img src="../images/carousel/s-img2.png"/></div>
                        <div className="carousel-cell mr-4"><img src="../images/carousel/s-img3.png"/></div>
                    </div>
            </div>
        </section>
    )
}

export default FeaturedInventory;