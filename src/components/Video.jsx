import { useState } from "react";
const Video = ()=>{
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    }

    return(
        <section className="relative bg-[#EFF1F8] pb-[100px]">
            <div className="container">
                <h2 className="text-h2 text-[#101828] font-[600] leading-[62px] max-w-[768px]">How to Import Your JDM Dream Car</h2>
                <p className="text-normal text-[#475467] font-[400]">Watch Our Step-by-Step Guide to Navigating the Import Process</p>
                <div className="grid grid-cols pt-[50px]">
                    <div className=" w-full max-w-[1280px] max-h-[500px]">
                        {!isPlaying ? (
                        // Thumbnail with Play Icon
                        <div
                            className="flex relative cursor-pointer min-h-[350px] md:min-h-[500px]"
                            onClick={playVideo}
                        >
                            <img
                                src="../images/video-img.jpg"
                                alt="Custom Thumbnail"
                                className="absolute w-full h-full rounded-[12px] object-cover z-9"
                            />
                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                           
                               <img src="../images/video_play.svg" alt="" aria-hidden={true} className="w-[60px] h-[60px]"/>
                            
                            </div>
                        </div>
                        ) : (
                        // Inline Video Player
                        <div className="relative">
                            <iframe
                            className="w-full min-h-[350px] md:min-h-[500px] rounded-[12px]"
                            src="https://www.youtube.com/embed/ftCWwBdGBJc?autoplay=1"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                        )}
                    </div>
                    </div>
            </div>
        </section>
    )
}

export default Video;