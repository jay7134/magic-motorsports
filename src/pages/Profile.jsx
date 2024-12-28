import { useState } from "react"
import Layout from "../components/Layout"
import ProfileDetails from "../components/ProfileDetails"
import Password from "../components/Password"
const Profile = () => {
const [activeTab, setActiveTab] = useState(1);
  return (
    <Layout>
        <section className="relative overflow-hidden min-h-[300px]">
            
            <img 
                src="../images/bg-profile.jpg"
                alt=""
                aria-hidden={true}
                className="absolute left-0 top-0 w-full h-full object-cover z-1"
            />
            <div className="absolute left-0 top-0 w-full h-full before:content-[''] before:bg-black-gradient before:absolute before:top-0 before:w-full before:h-full"></div>
                        
        </section>

        <section className="bg-[#f8f8f8] py-[50px]">
            <div className="container w-10/12 mx-auto bg-white rounded-[12px]">
                <h1 className="text-black text-[26px] font-[600] px-[25px] py-[15px]">Settings</h1>
                <hr/>
                <div className="flex flex-col md:flex-row gap-3 px-[25px] py-[15px] justify-between">
                    <div className="flex flex-inline md:flex-col gap-3 md:w-3/12">
                        <button 
                            onClick={()=>setActiveTab(1)}
                            className={`${activeTab == 1 ? 'bg-[#7962e8] text-white':'text-zinc-600'} text-left text-white text-[14px] focus:outline-none rounded-[4px] px-4 py-2 max-w-[120px]`}>
                            My Details
                        </button>
                        <button 
                            onClick={()=>setActiveTab(2)}
                            className={`${activeTab == 2 ? 'bg-[#7962e8] text-white':'text-zinc-600'} text-left text-[14px] focus:outline-none rounded-[4px] px-4 py-2 max-w-[120px]`}>
                            Password
                        </button>
                    </div>
                    { activeTab === 1 && <ProfileDetails/> }
                    { activeTab === 2 && <Password/>}
                    
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Profile