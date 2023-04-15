import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FacebookIcon,
  LinkedInIcon,
  GithubIcon,
  ReadCVIcon,
  TwitterIcon,
} from '@components/Icons/Icons';

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
    component: <LinkedInIcon className={'h-8'} />,
  },
  {
    to: 'https://github.com/mjasprec14',
    name: 'GitHub',
    component: <GithubIcon className={'h-8'} />,
  },
  // {
  //   to: 'https://read.cv/mjasprec',
  //   name: 'Read.cv',
  //   component: <ReadCVIcon className={'h-8'} />,
  // },
  {
    to: 'https://www.facebook.com/MichaelJosephAsprec',
    name: 'Facebook',
    component: <FacebookIcon className={'h-8'} />,
  },
  {
    to: 'https://twitter.com/MjAsprec',
    name: 'Twitter',
    component: <TwitterIcon className={'h-6'} />,
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
