import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./navigation/Navbar'));
const Footer = dynamic(() => import('./navigation/Footer'));

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
