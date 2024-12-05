import Header from "./Header";
import Footer from "./Footer";
import 'animate.css';
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