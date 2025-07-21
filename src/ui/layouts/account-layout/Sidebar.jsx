import { sidebar } from '../../../data/sidebar-sections';
import SidebarItem from './SidebarItem';

function Sidebar() {
  return (
    <div className="w-44 border-r-1 border-zinc-300 pr-6">
      {sidebar.map(({ itemId, heading, links }) => (
        <SidebarItem key={itemId} heading={heading} links={links} />
      ))}
    </div>
  );
}

export default Sidebar;
