import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  return (
    <Link
      href={to}
      className={`relative group ${className}`}
    >
      {name}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === to ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
