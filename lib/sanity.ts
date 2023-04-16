import { createClient } from 'next-sanity';

export const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET_NAME || 'production',
  apiVersion: '2022-03-25',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);
