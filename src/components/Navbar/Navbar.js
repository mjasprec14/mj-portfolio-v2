import React from 'react';
import { NavLinks, SocMed, CustomLink } from './Navbar.utils';
import { Logo } from '@components/index';
import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';

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

      <nav className='flex items-center justify-end flex-wrap'>
        {SocMed?.map(({ to, animation }, idx) => (
          <motion.span
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
            key={idx}
            href={to}
            target='_blank'
          >
            <SocialIcon
              url={to}
              bgColor='transparent'
              fgColor='gray'
            />
          </motion.span>
        ))}
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
