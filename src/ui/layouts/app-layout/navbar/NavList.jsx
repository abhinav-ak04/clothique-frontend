import NavListItems from './nav-list/NavListItems';

function NavList() {
  return (
    <nav className="flex h-20 min-w-md shrink justify-evenly">
      <NavListItems
        hoverBorderColor="hover:border-b-men"
        headingColor="text-men"
        category="men"
      >
        MEN
      </NavListItems>
      <NavListItems
        hoverBorderColor="hover:border-b-women"
        headingColor="text-women"
        category="women"
      >
        WOMEN
      </NavListItems>
      <NavListItems
        hoverBorderColor="hover:border-b-kids"
        headingColor="text-kids"
        category="kids"
      >
        KIDS
      </NavListItems>
      <NavListItems
        hoverBorderColor="hover:border-b-homeliving"
        headingColor="text-homeliving"
        category="homeLiving"
      >
        HOME & LIVING
      </NavListItems>
    </nav>
  );
}

export default NavList;
