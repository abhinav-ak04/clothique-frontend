import { NavLink } from 'react-router-dom';

function SidebarItem({ heading, links }) {
  console.log(heading, links);
  return (
    <div className="border-b-1 border-zinc-300 py-4 last:border-b-0">
      {heading && <h5 className="py-2 text-xs text-zinc-500">{heading}</h5>}
      {links.map(({ id, name, url }) => (
        <NavLink
          className={({ isActive }) =>
            `block text-[16px] ${isActive ? 'font-bold text-emerald-500' : 'text-zinc-900'}`
          }
          key={id}
          to={url}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}

export default SidebarItem;
