import { useState } from "react";
import Layout from "../components/Layout";
import PurchaseManagement from "../components/PurchaseManagement";
import UserManagement from "../components/UserManagement";
import InspectionManagement from "../components/InspectionManagement";

const Management = () => {
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
                    <div className="flex flex-row gap-3 justify-center mx-auto px-[25px] py-[15px]">
                        <button 
                            onClick={()=>setActiveTab(1)}
                            className={`${activeTab == 1 ? 'bg-[#7962e8] text-white':'text-zinc-600'} text-left text-white text-[14px] focus:outline-none rounded-[4px] px-4 py-2`}>
                            Users Management
                        </button>
                        <button 
                            onClick={()=>setActiveTab(2)}
                            className={`${activeTab == 2 ? 'bg-[#7962e8] text-white':'text-zinc-600'} text-left text-[14px] focus:outline-none rounded-[4px] px-4 py-2`}>
                            Purchase Management
                        </button>
                        <button 
                            onClick={()=>setActiveTab(3)}
                            className={`${activeTab == 3 ? 'bg-[#7962e8] text-white':'text-zinc-600'} text-left text-[14px] focus:outline-none rounded-[4px] px-4 py-2`}>
                            Inspection Management
                        </button>
                    </div>
                    <hr/>
                    <div className="flex flex-col gap-3 px-[25px] py-[15px]">
                        
                        { activeTab === 1 && <UserManagement/> }
                        { activeTab === 2 && <PurchaseManagement/>}
                        { activeTab === 3 && <InspectionManagement/>}
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Management;