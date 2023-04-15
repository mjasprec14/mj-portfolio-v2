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
    animation: {
      initial: {
        x: -200,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      transition: {
        duration: 1.5,
      },
      whileHover: {
        y: -2,
      },
      whileTap: {
        scale: 0.9,
      },
    },
  },
  {
    to: 'https://github.com/mjasprec14',
    name: 'GitHub',
    animation: {
      initial: {
        y: 200,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 2.5,
      },
      whileHover: {
        y: -2,
      },
      whileTap: {
        scale: 0.9,
      },
    },
  },
  {
    to: 'https://read.cv/mjasprec',
    name: 'Read.cv',
    animation: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      transition: {
        duration: 3,
      },
      whileHover: {
        y: -2,
      },
      whileTap: {
        scale: 0.9,
      },
    },
  },
  {
    to: 'https://www.facebook.com/MichaelJosephAsprec',
    name: 'Facebook',
    animation: {
      initial: {
        y: -200,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 2,
      },
      whileHover: {
        y: -2,
      },
      whileTap: {
        scale: 0.9,
      },
    },
  },
  {
    to: 'https://twitter.com/MjAsprec',
    name: 'Twitter',
    animation: {
      initial: {
        x: 200,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      transition: {
        duration: 1,
      },
      whileHover: {
        y: -2,
      },
      whileTap: {
        scale: 0.9,
      },
    },
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
