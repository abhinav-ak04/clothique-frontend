import { NavLink } from 'react-router-dom';

function MegaMenuColumn({ headingColor, title, links }) {
  return (
    <div className="">
      <NavLink
        className={`text-[15px] font-bold ${headingColor}`}
        to={title.url}
      >
        {title.name}
      </NavLink>

      <div className={`mt-2 flex flex-col gap-[2px]`}>
        {links.map((link) => (
          <NavLink
            className="text-[15px] font-medium text-gray-700 transition-transform hover:scale-102 hover:font-semibold hover:text-gray-950"
            key={link.id}
            to={link.url}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MegaMenuColumn;
