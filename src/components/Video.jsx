import { useState } from "react";
const Video = ()=>{
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    }

    return(
        <section className="bg-[#EFF1F8]">
            <div className="container overflow-hidden">
                <h2 className="text-h2 text-[#101828] font-[600] leading-[62px] max-w-[768px]">How to Import Your JDM Dream Car</h2>
                <p className="text-normal text-[#475467] font-[400]">Watch Our Step-by-Step Guide to Navigating the Import Process</p>
                <div className="block grid grid-cols bg-gray-100">
                    <div className="relative w-full max-w-[1280px] max-h-[500px]">
                        {!isPlaying ? (
                        // Thumbnail with Play Icon
                        <div
                            className="relative cursor-pointer"
                            onClick={playVideo}
                        >
                            <img
                                src="../images/video-img.jpg"
                                alt="Custom Thumbnail"
                                className="absolute w-full h-full rounded-lg object-cover insect-0"
                            />
                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 p-4 rounded-full">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="white"
                                className="w-12 h-12"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 3l14 9-14 9V3z"
                                />
                                </svg>
                            </div>
                            </div>
                        </div>
                        ) : (
                        // Inline Video Player
                        <div className="relative">
                            <iframe
                            className="w-full h-64 rounded-lg"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
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