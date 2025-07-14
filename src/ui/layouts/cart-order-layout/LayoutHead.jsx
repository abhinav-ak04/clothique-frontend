import { NavLink, useLocation } from 'react-router-dom';

function LayoutHead({ name, to }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const steps = [
    { name: 'BAG', path: '/checkout/cart' },
    { name: 'ADDRESS', path: '/checkout/address' },
    { name: 'PAYMENT', path: '/checkout/payment' },
  ];
  const headIdx = steps.findIndex((step) => step.name === name);
  const pathIdx = steps.findIndex((step) => step.path === currentPath);

  console.log(headIdx, pathIdx);

  const isLink = headIdx < pathIdx;
  const isActive = headIdx === pathIdx;

  return isLink ? (
    <NavLink to={to} className="pb-0.5">
      {name}
    </NavLink>
  ) : (
    <span
      className={`cursor-default pb-0.5 ${isActive && 'border-b-2 border-emerald-500 text-emerald-500'}`}
    >
      {name}
    </span>
  );
}

export default LayoutHead;
