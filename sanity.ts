import { createClient } from 'next-sanity';

export const config = {
  projectId: 'hewoqwvv',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false,
};

export const sanityClient = createClient(config);
