'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBallAmericanFootball, TbBallBasketball, TbBallFootball, TbBallTennis, TbCricket } from 'react-icons/tb';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {

    label: 'Rugby',
    icon: TbBallAmericanFootball,
    description: 'Rugby events!',
  },
  {
    label: 'Football',
    icon: TbBallFootball,
    description: 'Football events!',
  },
  {
    label: 'Cricket',
    icon: TbCricket,
    description: 'Cricket events!',
  },
  {
    label: 'Tennis',
    icon: TbBallTennis,
    description: 'Tennis events!',
  },
  {
    label: 'Basketball',
    icon: TbBallBasketball,
    description: 'Basketball events!',
  },

]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;