import Logo from '../../../shared/Logo';
import NavList from './NavList';
import NavSearchBox from './NavSearchBox';
import NavAction from './NavAction';

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white">
      <header className="relative flex h-20 items-center justify-between border-b border-slate-100 shadow-lg">
        <Logo />
        <NavList />
        <NavSearchBox />
        <NavAction />
      </header>
    </div>
  );
}

export default Header;
