import Layout from "../components/Layout";

const Home = ()=>{
    return(

        <Layout>
            <section id="hero" className="relative flex items-center justify-center overflow-hidden">
                <img
                    src="../images/bg-home-hero.jpg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="container grid grid-cols-1 md:grid-cols-2 items-center justify-between py-6 px-6 relative z-10">
                    <div className="text-left">
                        <h1 className="text-h1 md:text-h1 font-bold text-white">Discover a New Level of Comfort</h1>
                        <p className="text-normal py-4 m-w-[610]">Magic Motorsports imports authentic Japanese Domestic Market (JDM) vehicles. We handle everything from inspections to paperwork, ensuring compliance with U.S. regulations. Explore our inventory and Japanese auctions to find your perfect car</p>
                    </div>
                    <div>
                        <h2>What car are you looking for?</h2>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Home;