const ProfileDetails = () => {
  return (
    <div className="w-full animate__animated animate__fadeIn">
        <div className="min-h-[130px] md:min-h-[200px] bg-gradient-to-l from-[#f3e5f6] to-[#bcc8f8]"></div>
        <div>
            <div className="flex flex-col md:flex-row gap-[10px] justify-between items-center mt-[-30px] mb-[30px]">
                
                <div className="w-4/12 relative bg-[#f7f7f7] w-[90px] h-[90px] md:w-[120px] md:h-[120px] border-[2px] border-[#ffffff] rounded-full shadow-md">
                    <img 
                        src="../images/profile-pic.jpg" 
                        alt="profile pic"
                        className="w-full rounded-full"
                    />
                    <img 
                        src="../images/verified.png"
                        aria-hidden={true}
                        className="absolute w-[20px] h-[20px] top-[70px] md:top-[90px] right-[1px]"
                    />
                </div>
                
                <div className="w-10/12 flex flex-col md:flex-row item-center justify-between">
                
                    <div className="pt-[20px] text-center md:text-left">
                        <h2 className="text-black text-[20px] md:text-[26px] font-[600]">Profile</h2>
                        <p className="text-slate-600 text-[12px] md:text-[14px] font-[400]">Update your photo and personal details.</p>
                    </div>
                    
                    <div className="space-x-4 pt-[20px] text-center">
                        <button className="border border-slate-500 p-2 rounded-[8px] text-[12px] text-black font-[400]">Cancel</button>
                        <button className="bg-black border border-black px-3 py-2 rounded-[8px] text-[12px] text-white font-[400]">Save</button>
                    </div>

                </div>

            </div>
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] pt-[50px] mb-4">
            <div className="text-left md:w-6/12">
                <h4 className="text-black text-[16px] font-[500]">Your Photo</h4>
                <p className="text-slate-500 text-[14px] font-[400]">This will be displayed on your profile</p>
            </div>
            <div className="w-full flex flex-row gap-1 justify-between item-center md:items-start">
                <img src="../images/profile-img.png" alt="" width={80} height={80}/>
                <div className="space-x-4 flex md:flex-inline items-center md:items-start">
                    <button className="text-[13px] text-slate-500 font-[500]">Delete</button>
                    <button className="text-[13px] text-black font-[500]">Update</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center mb-4 md:mr-5">
            <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Name</label>
            <input 
                type="text" 
                name="name"
                placeholder="Name"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
            />
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4 md:mr-5">
            <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Address</label>
            <input 
                type="text" 
                name="address"
                placeholder="Address"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
            />
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4 md:mr-5">
            <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Email</label>
            <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
            />
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4 md:mr-5">
            <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Address</label>
            <div className="w-full">
            <input 
                type="text" 
                name="address2"
                placeholder="Address"
                className="w-full mb-2 text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
            />
            <div className="flex flex-row gap-[15px]">
                
                <input 
                    type="text" 
                    name="name"
                    placeholder="City"
                    className="text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                />

                <select className="text-[14px] font-[400] block bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]">
                    <option className="text-[14px] font-[400] text-black">Select Port</option>
                    <option className="text-[14px] font-[400] text-black" value="Baltimore">Baltimore</option>
                    <option className="text-[14px] font-[400] text-black" value="Brunswick">Brunswick</option>
                    <option className="text-[14px] font-[400] text-black" value="Freeport (Texas)">Freeport (Texas)</option>
                    <option className="text-[14px] font-[400] text-black" value="Galveston">Galveston</option>
                    <option className="text-[14px] font-[400] text-black" value="Guam">Guam</option>
                    <option className="text-[14px] font-[400] text-black" value="Honolulu">Honolulu</option>
                    <option className="text-[14px] font-[400] text-black" value="Jacksonville">Jacksonville</option>
                    <option className="text-[14px] font-[400] text-black" value="Long Beach">Long Beach</option>
                    <option className="text-[14px] font-[400] text-black" value="Los Angeles">Los Angeles</option>
                    <option className="text-[14px] font-[400] text-black" value="New York">New York</option>
                    <option className="text-[14px] font-[400] text-black" value="Newport News">Newport News</option>
                    <option className="text-[14px] font-[400] text-black" value="Port Hueneme">Port Hueneme</option>
                    <option className="text-[14px] font-[400] text-black" value="Saipan">Saipan</option>
                    <option className="text-[14px] font-[400] text-black" value="Tacoma">Tacoma</option>
                    <option className="text-[14px] font-[400] text-black" value="Non USA please contact">Non USA please contact</option>
                </select>

                <input 
                    type="text" 
                    name="zip"
                    placeholder="Zipcode"
                    className="text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                />
                
            </div>
            </div>
        </div>
        <hr/>
        <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center pb-4 my-4 md:mr-5">
            <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Phone Number</label>
            <input 
                type="number" 
                name="phone"
                placeholder="Phone number"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
            />
            
        </div>
    </div>
  )
}

export default ProfileDetails