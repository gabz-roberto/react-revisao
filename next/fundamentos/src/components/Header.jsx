import Link from 'next/link';

import header from '../styles/Header.module.css';

const Header = (props) => {

  return (
      <header className={header.headerFull}>
          {props.children}
          <Link href="/">Voltar</Link>
      </header>
  )
};

export default Header;