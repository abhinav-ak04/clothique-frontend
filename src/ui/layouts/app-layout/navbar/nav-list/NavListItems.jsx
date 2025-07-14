import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MegaMenu from './MegaMenu';
import { megamenu } from '../../../../../data/megamenu';

function NavListItems({ hoverBorderColor, headingColor, category, children }) {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowMegaMenu(true)}
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <NavLink
        className={`text-navbar-text flex items-center border-b-2 border-b-white px-3 py-[27px] text-base font-[650] ${hoverBorderColor}`}
      >
        {children}
      </NavLink>

      {showMegaMenu && (
        <MegaMenu
          showMegaMenu={showMegaMenu}
          headingColor={headingColor}
          contents={megamenu[category]}
        />
      )}
    </div>
  );
}

export default NavListItems;
