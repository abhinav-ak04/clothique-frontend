import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

function DashBoardPersonalInfo() {
  const { userData } = useUser();
  const navigate = useNavigate();

  return (
    <div className="mb-7 flex h-48 w-full bg-zinc-100 px-8 py-7">
      <img
        src="/unknown-person.png"
        alt="Unknown Person"
        className="mr-7 h-full w-auto"
      />
      <div className="h-full w-full">
        <div className="flex justify-end">
          <button
            className="rounded-xs border-1 px-2 py-0.5 text-xs font-bold"
            onClick={() => navigate('/my/profile/edit')}
          >
            Edit Profile
          </button>
        </div>
        <p className="mt-8 text-sm text-zinc-950">{userData.email}</p>
      </div>
    </div>
  );
}

export default DashBoardPersonalInfo;
