import Link from 'next/link';
import React from 'react';
import { NavLinks, SocMed, CustomLink } from './Navbar.utils';
import { Logo } from '@components/index';

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex justify-between items-center relative'>
      <nav className='space-x-4'>
        {NavLinks?.map((link, idx) => (
          <CustomLink
            key={idx}
            to={link?.to}
            name={link?.name}
            className={link?.className}
          />
        ))}
      </nav>

      <nav className='space-x-4'>
        {SocMed?.map((soc, idx) => (
          <Link
            key={idx}
            href={soc.to}
          >
            {soc.name}
          </Link>
        ))}
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
