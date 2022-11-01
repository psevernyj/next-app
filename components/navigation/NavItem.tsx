import React, {FC, useState} from 'react';
import Link from 'next/link';
import Dropdown from "./Dropdown";



export interface NavItemProp {
  text: string;
  href: string;
  active?: boolean;
  submenu?: NavItemProp[] | undefined;
}


const NavItem: FC<NavItemProp> = ({href, active, submenu, text}:NavItemProp): JSX.Element => {

  const [dropdown, serDropdown] = useState(false);
  return (
      <div className={'menu-items mainItems'}>
        {
          submenu ? (
              <>
              <button aria-expanded={dropdown ? "true" : "false"}
                   // onMouseDown={() => serDropdown(true)}
                   // onMouseLeave={() => serDropdown(false)}
                  onClick={() => serDropdown((prev) => !prev)}
              >
                <Link href={href} className={`navLink ${active ? 'active' : ''}`}>
                  {text}
                </Link>
              </button>
                <Dropdown dropDownMenu={submenu} dropdown={dropdown}/>
              </>
          ) : (
              <Link href={href} className={`navLink ${active ? 'active' : ''}`}>
                {text}
              </Link>
          )
        }


      </div>

  );
};

export default NavItem;
