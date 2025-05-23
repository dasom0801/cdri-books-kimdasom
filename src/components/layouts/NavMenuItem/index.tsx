import { Link } from 'react-router';
import classes from './index.module.scss';

export type NavMenuItemType = {
  name: string;
  path: string;
  isActive: boolean;
};

export default function NavMenuItem({ name, path, isActive }: NavMenuItemType) {
  return (
    <Link
      to={path}
      className={classes[isActive ? 'nav-active' : 'nav-default']}
    >
      <span>{name}</span>
    </Link>
  );
}
