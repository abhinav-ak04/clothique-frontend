import { sections } from '../../data/filter-sections';
import FilterSection from './FilterSection';

function Filters({ filters }) {
  return (
    <div className="border-r-1 border-zinc-200">
      {sections.map((section) => (
        <FilterSection key={section.id} section={section} filters={filters} />
      ))}
    </div>
  );
}

export default Filters;
