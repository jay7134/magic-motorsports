const Password = () => {
    const loginList = [
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am',
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 12:40pm'
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 iPhone XS',
            type: 'mobile',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 iPhone XS',
            type: 'mobile',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        },
        {
            device:'2018 Macbook Pro 15-inch',
            type: 'desktop',
            location: 'Melbourne, Australia',
            date: '22 Jan at 10:40am'
        }
    ]
  return (
    <div className="w-full flex flex-col md:flex-row animate__animated animate__fadeIn md:border-l-[1px] md:border-[#e5e7eb]">
        
        <div className="w-full md:w-8/12 px-4 py-2 pb-8">
            
            <div className="mb-4">
                <h4 className="text-black text-[16px] font-[600]">Password</h4>
                <p className="text-slate-500 text-[13px] font-[400]">Please enter your current password to change your password.</p>
            </div>
            
            <hr/>

            <form>
                
                <div className="flex flex-col gap-[5px] mb-4 mt-5">
                    <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Current Password</label>
                    <input 
                        type="password" 
                        name="currentpassword"
                        placeholder="********"
                        className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-left text-[14px] text-black font-[500] md:w-6/12">New Password</label>
                    <input 
                        type="password" 
                        name="newpassword"
                        placeholder="********"
                        className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                    />
                </div>

                <div className="flex flex-col gap-[5px] mb-4">
                    <label className="text-left text-[14px] text-black font-[500] md:w-6/12">Confirm New Password</label>
                    <input 
                        type="password" 
                        name="confirmnewpassword"
                        placeholder="********"
                        className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                    />
                </div>

                <div className="space-x-4 flex flex-row justify-end">
                    <button className="border border-slate-500 p-2 rounded-[8px] text-[12px] text-black font-[400]">Cancel</button>
                    <button className="bg-black border border-black px-3 py-2 rounded-[8px] text-[12px] text-white font-[400]">Update password</button>
                </div>

            </form>
    
        </div>

        <div className="w-full md:w-4/12 pl-4 py-2 md:border-l-[1px] md:border-[#e5e7eb]">
            
            <div className="mb-4">
                <h4 className="text-black text-[16px] font-[600]">Where you're logged in</h4>
                <p className="text-slate-500 text-[12px] font-[400]">We'll alert you via Olivia@untitled.com...'.</p>
            </div>

            <hr/>

            {
                loginList.map((item,index)=>(
                    <div key={index} className="flex flex-inline gap-1 item-top py-3 mb-1 border-b-[1px]">
                        <div className="p-1">
                            <img src={`../images/${item.type}.jpg`} width={13} height={12}/>
                        </div>
                        <div>
                            <h4 className="text-[11px] text-slate-700 font-[500]">
                                {item.device} 
                                {index === 0 && 
                                    <span className="border border[1px] border-[#e5e7eb] rounded-[4px] px-1 ml-2">
                                        <span className="text-green-400 text-[14px]">&bull; </span>
                                        Active now
                                    </span>
                                }
                            </h4>
                            <p className="text-[10px] text-slate-700">{item.location} &bull; {item.date}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Password