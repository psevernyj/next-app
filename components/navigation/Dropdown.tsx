import React, { FC } from 'react';
import Link from 'next/link';
import { NavItemProp } from './NavItem';

interface DropDownProp {
  dropDownMenu: NavItemProp[];
  dropdown: boolean;
}

const Dropdown: FC<DropDownProp> = ({
  dropDownMenu,
  dropdown,
}: DropDownProp): JSX.Element => {
  return (
    <div className={`dropdown ${dropdown ? 'show' : ''}`}>
      {dropDownMenu.map((item: NavItemProp, key) => (
        <div className="menu-items subLink" key={key}>
          <Link href={item.href}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
