const Popup =({ togglePopup })=>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[10px]">
            <div className="bg-black rounded-[12px] shadow-lg p-[15px] relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={togglePopup}
                    className="absolute top-0 right-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <i className="ri-close-line text-white text-[24px]"></i>
                </button>
                <h2 className="text-white text-[32px] leading-[42px] font-[600] pt-[10px]">What car are you looking for?</h2>

                <form className="py-[10px]">
                        <div className="mb-[10px]">
                            <label className="text-white font-sm font-[500] leading-[24px]">Make</label>
                            <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                <option className="text-sm font-[400] text-black">Select cars</option>
                                <option className="text-sm font-[400] text-black">Toyota</option>
                                <option className="text-sm font-[400] text-black">Suzuki</option>
                                <option className="text-sm font-[400] text-black">Honda</option>
                            </select>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-4">
                            <div className="mb-[0px]">
                                <label className="text-white font-sm font-[500] leading-[24px]">Model</label>
                                <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                <option className="text-sm font-[400] text-black">Select model</option>
                                    <option className="text-sm font-[400] text-black">2024</option>
                                    <option className="text-sm font-[400] text-black">2023</option>
                                    <option className="text-sm font-[400] text-black">2022</option>
                                </select>
                            </div>
                            <div className="mb-[10px]">
                                <label className="text-white font-sm font-[500] leading-[24px]">Grade</label>
                                <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                <option className="text-sm font-[400] text-black">Select grade</option>
                                    <option className="text-sm font-[400] text-black">5</option>
                                    <option className="text-sm font-[400] text-black">4</option>
                                    <option className="text-sm font-[400] text-black">3</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols">
                            <label className="text-white font-sm font-[500] leading-[24px]">Year</label>
                            <div className="grid grid-cols sm:grid-cols-2 gap-4">
                                <div className="mb-[0px] relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className="ri-calendar-line text-white"></i>
                                    </span>
                                    <input 
                                        type="number"
                                        
                                        placeholder="2020"
                                        min="2000"
                                        max="2025"
                                        className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px] pl-10"
                                    />
                                    
                                </div>
                                <div className="mb-[10px] relative">
                                    
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className="ri-calendar-line text-white"></i>
                                    </span>
                                    <input 
                                        type="number"
                                        
                                        placeholder="2024"
                                        min="2000"
                                        max="2025"
                                        className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px] pl-10"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-4">
                            <div className="mb-[0px]">
                                <label className="text-white font-sm font-[500] leading-[24px]">Color</label>
                                <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                <option className="text-sm font-[400] text-black">Select color</option>
                                    <option className="text-sm font-[400] text-black">White</option>
                                    <option className="text-sm font-[400] text-black">Black</option>
                                    <option className="text-sm font-[400] text-black">Grey</option>
                                </select>
                            </div>
                            <div className="mb-[10px]">
                                <label className="text-white font-sm font-[500] leading-[24px]">Transmission</label>
                                <select className="text-sm font-[400] block bg-transparent border boreder-[1px] border-white w-full outline-none text-white py-2 px-2 rounded-[8px] mt-[5px]">
                                <option className="text-sm font-[400] text-black">Select transmission</option>
                                    <option className="text-sm font-[400] text-black">Automatic</option>
                                    <option className="text-sm font-[400] text-black">Manual</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols ">
                            <button className="text-sm font-[600] block bg-transparent hover:bg-white border boreder-[1px] border-white w-full outline-none text-white hover:text-black py-2 px-2 rounded-[8px] mt-[10px] transition duration-300">SUBMIT</button>
                        </div>
                    </form>

            </div>
        </div>
    )
}

export default Popup;