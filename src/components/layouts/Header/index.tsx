import Logo from '../Logo';
import NavMenu from '../NavMenu';
import classes from './index.module.scss';

export default function Header() {
  return (
    <header className={classes.container}>
      <Logo />
      <NavMenu />
    </header>
  );
}
