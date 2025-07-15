import { NavLink } from 'react-router-dom';
import { homeCards } from '../data/home-cards';

function Home() {
  return (
    <div className="mx-10">
      {homeCards.map(({ id: sectionId, headImg, cards }) => (
        <div key={sectionId} className="mb-6">
          <img src={headImg} alt="Section Head" className="w-full" />
          <div className="text-center">
            {cards.map(({ id, img }) => (
              <NavLink to="/search" key={id}>
                <img
                  src={img}
                  alt="Home Card"
                  className={`inline h-auto cursor-pointer ${sectionId === 1 ? 'w-1/5' : 'w-1/6'} ${sectionId == 3 ? 'm-0' : 'mt-3 mb-6'}`}
                />
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
