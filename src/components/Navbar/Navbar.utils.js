import Link from 'next/link';

export const NavLinks = [
  {
    to: '/',
    name: 'Home',
    className: '',
  },
  {
    to: '/about',
    name: 'About',
    className: '',
  },
  {
    to: '/projects',
    name: 'Projects',
    className: '',
  },
  {
    to: '/articles',
    name: 'Articles',
    className: '',
  },
];

export const SocMed = [
  {
    to: 'https://www.linkedin.com/in/michael-joseph-asprec-254071251/',
    name: 'LinkedIn',
  },
  {
    to: 'https://github.com/mjasprec14',
    name: 'GitHub',
  },
  {
    to: 'https://read.cv/mjasprec',
    name: 'Read.cv',
  },
  {
    to: 'https://www.facebook.com/MichaelJosephAsprec',
    name: 'Facebook',
  },
  {
    to: 'https://twitter.com/MjAsprec',
    name: 'Twitter',
  },
];

export const CustomLink = ({ to, name, className = '' }) => {
  return (
    <Link
      href={to}
      className={`relative group ${className}`}
    >
      {name}
      <span className='h-[3px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300'>
        &nbsp;
      </span>
    </Link>
  );
};
