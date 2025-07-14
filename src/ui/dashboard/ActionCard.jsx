import { NavLink } from 'react-router-dom';

function ActionCard({ Icon, title, description, url }) {
  return (
    <NavLink
      to={url}
      className="flex aspect-square min-w-[30%] flex-1 flex-col items-center justify-center border border-zinc-200 hover:bg-zinc-100"
    >
      {/* <div className="flex aspect-square min-w-[30%] flex-1 flex-col items-center justify-center border border-zinc-200 hover:bg-zinc-100"> */}
      <Icon className="m-4 text-4xl text-zinc-500" />
      <div className="text-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs text-gray-400">{description}</p>
      </div>
      {/* </div> */}
    </NavLink>
  );
}

export default ActionCard;
