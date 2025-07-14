import { accountCards } from '../../data/account-cards';
import ActionCard from './ActionCard';

function DashBoardAction() {
  return (
    <div className="flex flex-wrap gap-4">
      {accountCards.map(({ id, Icon, title, description, url }) => (
        <ActionCard
          Icon={Icon}
          title={title}
          description={description}
          url={url}
          key={id}
        />
      ))}
    </div>
  );
}

export default DashBoardAction;
