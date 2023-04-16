import { Layout } from '@components/index';
import { fetchSocials } from '@utils/fetchSocials';

export default function Home({ socials }) {
  console.log('socials', socials);
  return (
    <>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const socials = await fetchSocials();

  return {
    props: {
      socials,
    },
  };
}
