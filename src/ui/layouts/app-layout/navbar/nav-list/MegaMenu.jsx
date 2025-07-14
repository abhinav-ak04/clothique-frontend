import MegaMenuColumn from './MegaMenuColumn';

function MegaMenu({ headingColor, contents }) {
  return (
    <div
      // className={`shadow-lgtransition-all absolute top-full left-1/2 z-50 flex w-[90%] -translate-x-1/2 justify-evenly rounded-md bg-amber-400 p-5 duration-200 ${showMegaMenu ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-5 opacity-0'}`}
      className={`absolute top-full left-1/2 z-50 flex w-[80%] -translate-x-1/2 justify-evenly rounded-md border border-gray-200 bg-white p-5 shadow-xl transition-all duration-300`}
    >
      {contents.map((menu) => (
        <MegaMenuColumn
          key={menu.categoryId}
          title={menu.title}
          links={menu.links}
          headingColor={headingColor}
        />
      ))}
    </div>
  );
}

export default MegaMenu;
