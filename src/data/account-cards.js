import { CgCollage } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { LuCrown, LuPackageOpen } from 'react-icons/lu';
import { RiCouponLine, RiFileEditLine } from 'react-icons/ri';
export const accountCards = [
  {
    id: 1,
    Icon: LuPackageOpen,
    title: 'Orders',
    description: 'Check your Order Status',
    url: '/my/orders',
  },
  {
    id: 2,
    Icon: CgCollage,
    title: 'Collections & Wishlist',
    description: 'All your curated product collections',
    url: '/wishlist',
  },
  {
    id: 3,
    Icon: RiCouponLine,
    title: 'Coupons',
    description: 'Manage coupons for additional discounts',
    url: '/my/coupons',
  },
  {
    id: 4,
    Icon: GrLocation,
    title: 'Addresses',
    description: 'Save addresses for a hassle-free checkout',
    url: '/my/addresses',
  },
  {
    id: 5,
    Icon: RiFileEditLine,
    title: 'Profile Details',
    description: 'Change your profile details',
    url: '/my/profile/edit',
  },
  {
    id: 6,
    Icon: LuCrown,
    title: 'Clothique Club',
    description: 'Manage your club membership',
    url: '/my/clothique-club',
  },
];
