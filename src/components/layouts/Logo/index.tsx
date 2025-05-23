import { Link } from 'react-router';
import classes from './index.module.scss';

export default function Logo() {
  return (
    <Link className={classes.logo} to='/'>
      CERTICOS BOOKS
    </Link>
  );
}
