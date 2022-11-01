import React, {ReactNode} from 'react';
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
