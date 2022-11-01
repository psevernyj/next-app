import React, { FC } from 'react';
import Link from 'next/link';

type NavItemProp = {
  href: string;
  text: string;
  active: boolean;
};

const NavItem: FC<NavItemProp> = ({ href, text, active }) => {
  return (
    <Link href={href} className={`navLink ${active ? 'active' : ''}`}>
        {text}
    </Link>
  );
};

export default NavItem;
