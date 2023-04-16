export const fetchSocials = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/getSocials`);

    const data = await res.json();
    const socials = data.socials;

    return socials;
  } catch (error) {
    throw new Error('Failed to fetch Socials data.');
  }
};
