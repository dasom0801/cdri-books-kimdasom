import { useLocation } from 'react-router';
import type { NavMenuItemType } from '../NavMenuItem';
import NavMenuItem from '../NavMenuItem';
import classes from './index.module.scss';
const MENU_ITEMS: Omit<NavMenuItemType, 'isActive'>[] = [
  { name: '도서 검색', path: '/' },
  { name: '내가 찜한 책', path: '/likes' },
];

export default function NavMenu() {
  const location = useLocation();

  return (
    <nav className={classes.container}>
      <ul>
        {MENU_ITEMS.map((menu) => (
          <li key={menu.path}>
            <NavMenuItem {...menu} isActive={location.pathname === menu.path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
