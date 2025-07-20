import { NavLink, useNavigate } from 'react-router-dom';

function DropdownActions({ isBottom, links }) {
  const navigate = useNavigate();

  async function handleClick(action) {
    if (action.name === 'Logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      navigate('/');
    } else navigate(action.url);
  }

  return (
    <div
      className={`flex flex-col gap-[2px] ${!isBottom && 'border-b border-gray-200'} pb-3`}
    >
      {links.map((action) => (
        <button
          key={action.id}
          onClick={() => handleClick(action)}
          className="cursor-pointer text-left text-[15px] font-medium text-gray-700 transition-transform hover:scale-102 hover:font-semibold hover:text-gray-950"
        >
          {action.name}
        </button>
      ))}
    </div>
  );
}

export default DropdownActions;
