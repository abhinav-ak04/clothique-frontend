import { FaShippingFast } from 'react-icons/fa';
import { FaHouseCircleCheck } from 'react-icons/fa6';
import { HiReceiptRefund } from 'react-icons/hi2';
import { MdCancel, MdLocalShipping } from 'react-icons/md';
export const orders = [
  {
    orderId: 1,
    price: 286.0,
    status: 'Shipped',
    StatusIcon: MdLocalShipping,
    completionDate: new Date('2024-06-13'),
    company: 'Campus Sutra',
    description: 'Olive Green Dry-Fit Training T-shirt',
    size: 'M',
    img: 'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/22735568/2023/4/11/8140fcbf-5f14-408f-8511-63ffbb9171cb1681234630875CampusSutraMenColorblockStylishActiveSportsT-Shirts1.webp',
  },
  {
    orderId: 2,
    price: 285.0,
    status: 'Out For Delivery',
    StatusIcon: FaShippingFast,
    completionDate: new Date('2024-06-11'),
    company: 'Roadster',
    description: 'The Lifestyle Co. Round Neck Regular Fit Striped T-shirt',
    size: 'M',
    img: 'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/24882468/2024/2/26/a6a9e570-43f8-485b-92ad-02956c7fdbcc1708942113268-Roadster-Men-Tshirts-9941708942112899-1.webp',
  },
  {
    orderId: 3,
    price: 204.0,
    status: 'Delivered',
    StatusIcon: FaHouseCircleCheck,
    completionDate: new Date('2024-02-23'),
    company: 'HRX by Hrithik Roshan',
    description: 'Men Typography Printed Rapid-Dry Running Sports Shorts',
    size: '32',
    img: 'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/22992914/2023/5/8/279d1eed-b628-4634-9956-8237d15ec2521683536307415-HRX-by-Hrithik-Roshan-Men-Shorts-4911683536306824-1.webp',
  },

  {
    orderId: 4,
    price: 519.0,
    status: 'Refunded',
    StatusIcon: HiReceiptRefund,
    completionDate: new Date('2023-12-10'),
    company: 'INVICTUS',
    description:
      'Men Burgundy White Slim Fit Striped Polo Collar Pure Cotton T-shirt',
    size: 'L',
    img: 'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/11750416/2020/9/19/60d370cc-07b6-4fe4-ac09-a719b822a2751600504560070-INVICTUS-Men-Tshirts-6581600504558574-1.webp',
  },
  {
    id: 5,
    price: 799,
    status: 'Cancelled',
    StatusIcon: MdCancel,
    completionDate: new Date('2021-08-15'),
    company: 'HRX by Hrithik Roshan',
    description: 'Men Navy Blue & Red Solid Running Dryfit Cap',
    size: 'Onesize',
    img: 'https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/1814863/2017/6/2/11496388606257-HRX-by-Hrithik-Roshan-Men-Navy--Red-Cap-9881496388605986-1.webp',
  },
];
