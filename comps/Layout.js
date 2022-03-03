//! The children here is anything that is nested inside it like we did in _app.js.

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;