import Header from "./Header";
import Footer from "./Footer";
import 'animate.css';
import 'remixicon/fonts/remixicon.css'
const Layout = ({children})=>{
    return(
        <>
        <Header/>
            {children}
        <Footer/>
        </>
    )
}

export default Layout;