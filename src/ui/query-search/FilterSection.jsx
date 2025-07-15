import { useSearchParams } from 'react-router-dom';

function FilterSection({ section, filters }) {
  const { title, inputType } = section;

  const titleMap = {
    brand: 'brand',
    color: 'color',
    type: 'gender',
    categories: 'individualCategory',
    discount: 'discount',
  };

  const items = Object.entries(filters[titleMap[section.title]]);

  console.log('aaaaaaaaaaaaaaaa', items);

  const newTitle = capitalizeFirstLetter(title);
  const [searchParams, setSearchParams] = new useSearchParams();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function handleChange(value) {
    const newSearchParams = new URLSearchParams(searchParams);
    if (inputType === 'radio') {
      newSearchParams.set(title, value);
      setSearchParams(newSearchParams);
    } else {
      let selectedValues = new Set(newSearchParams.getAll(title) || []);
      if (selectedValues.has(value)) {
        selectedValues.delete(value);
      } else {
        selectedValues.add(value);
      }
      newSearchParams.delete(title);
      selectedValues.forEach((val) => newSearchParams.append(title, val));
      setSearchParams(newSearchParams);
    }
  }

  return (
    <div className="border-b-1 border-zinc-200 px-5 py-3">
      {newTitle != 'Type' && (
        <h1 className="mb-1.5 text-base font-bold">{newTitle}</h1>
      )}
      {items.map(([name, count], idx) => (
        <div className="flex items-center gap-3 p-0.5 py-1" key={idx}>
          {inputType == 'radio' ? (
            <>
              <input
                type="radio"
                name={title}
                value={name}
                id={name}
                checked={searchParams.get(title) === name}
                onChange={(e) => handleChange(e.target.value)}
                className={`checked:bg-core-theme checked:outline-core-theme h-3 w-3 cursor-pointer appearance-none rounded-full outline outline-offset-3 outline-zinc-400 transition-opacity outline-solid checked:border-transparent`}
              />
              <label
                className={`w-full text-sm ${title === 'type' && 'font-bold'}`}
                htmlFor={name}
              >
                {name}
              </label>
            </>
          ) : (
            <label className="relative mb-1 block w-full cursor-pointer pl-7 text-[14px] leading-none">
              {`${name} (${count})`}
              <input
                type="checkbox"
                name={title}
                value={name}
                id={name}
                checked={searchParams.getAll(title).includes(name)}
                onChange={(e) => handleChange(e.target.value)}
                className="peer absolute h-0 w-0"
              />
              <span className="peer-checked:bg-core-theme after: absolute top-0 left-0 h-4 w-4 rounded-xs border border-zinc-400 peer-checked:border-0 after:absolute after:top-[2px] after:left-[6px] after:h-2.5 after:w-[5px] after:rotate-45 after:border-r-[2.6px] after:border-b-[2.6px] after:border-solid after:border-white after:content-['']"></span>
            </label>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilterSection;
