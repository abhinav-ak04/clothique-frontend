import { NavLink } from 'react-router-dom';

function DropdownActions({ isBottom, links }) {
  return (
    <div
      className={`flex flex-col gap-[2px] ${!isBottom && 'border-b border-gray-200'} pb-3`}
    >
      {links.map((action) => (
        <NavLink
          key={action.id}
          to={action.url}
          className="text-[15px] font-medium text-gray-700 transition-transform hover:scale-102 hover:font-semibold hover:text-gray-950"
        >
          {action.name}
        </NavLink>
      ))}
    </div>
  );
}

export default DropdownActions;
