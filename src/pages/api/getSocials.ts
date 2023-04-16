import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '@lib/sanity';

const query = groq`*[_type=="social"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const socials = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
